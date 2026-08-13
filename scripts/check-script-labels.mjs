#!/usr/bin/env node

import { readFileSync } from 'node:fs'
import process from 'node:process'
import { pathToFileURL } from 'node:url'
import vm from 'node:vm'

const DEFAULT_REPOSITORY = 'w3c/type-samples'
const FILTER_OPTIONS_URL = new URL('../index-data/filter-options.js', import.meta.url)

export function getPageScriptCodes() {
	const source = readFileSync(FILTER_OPTIONS_URL, 'utf8')
	const context = {
		document: {
			addEventListener() {},
		},
	}

	vm.runInNewContext(source, context)
	return new Set(context.typeSampleFilters.script.map((item) => item.value).filter(Boolean))
}

export async function getGitHubScriptCodes(repository, token) {
	const codes = new Set()
	const headers = {
		Accept: 'application/vnd.github+json',
		'User-Agent': 'type-samples-script-label-check',
		'X-GitHub-Api-Version': '2022-11-28',
	}

	if (token) headers.Authorization = `Bearer ${token}`

	for (let page = 1; ; page += 1) {
		const url = `https://api.github.com/repos/${repository}/labels?per_page=100&page=${page}`
		const response = await fetch(url, { headers })

		if (!response.ok) {
			throw new Error(`GitHub labels request failed: ${response.status} ${response.statusText}`)
		}

		const labels = await response.json()
		for (const label of labels) {
			if (label.name.startsWith('s:')) codes.add(label.name.slice(2))
		}

		if (labels.length < 100) break
	}

	return codes
}

export function compareScriptCodes(pageCodes, githubCodes) {
	return {
		missingFromPage: [...githubCodes].filter((code) => !pageCodes.has(code)).sort(),
		missingFromGitHub: [...pageCodes].filter((code) => !githubCodes.has(code)).sort(),
	}
}

async function main() {
	const repository = process.env.GITHUB_REPOSITORY || DEFAULT_REPOSITORY
	const pageCodes = getPageScriptCodes()
	const githubCodes = await getGitHubScriptCodes(repository, process.env.GITHUB_TOKEN)
	const { missingFromPage, missingFromGitHub } = compareScriptCodes(pageCodes, githubCodes)

	if (missingFromPage.length === 0 && missingFromGitHub.length === 0) {
		console.log(`Script filters match all ${githubCodes.size} GitHub s:* labels.`)
		return
	}

	console.error('Script filters and GitHub labels are out of sync.')
	if (missingFromPage.length > 0) {
		console.error(`Missing from the page: ${missingFromPage.map((code) => `s:${code}`).join(', ')}`)
	}
	if (missingFromGitHub.length > 0) {
		console.error(`Missing from GitHub: ${missingFromGitHub.map((code) => `s:${code}`).join(', ')}`)
	}
	process.exitCode = 1
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main()
