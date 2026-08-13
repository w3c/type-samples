import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import vm from 'node:vm'

import { compareScriptCodes } from '../scripts/check-script-labels.mjs'

function loadFilterOptions() {
	const source = readFileSync(new URL('../index-data/filter-options.js', import.meta.url), 'utf8')
	const selects = {
		script: createElement('select'),
		topics: createElement('select'),
	}
	const context = {
		document: {
			documentElement: { lang: 'en' },
			addEventListener(event, listener) {
				if (event === 'DOMContentLoaded') listener()
			},
			createElement,
			getElementById(id) {
				return selects[id]
			},
		},
	}

	vm.runInNewContext(source, context)
	return { filters: context.typeSampleFilters, selects }
}

function createElement(tagName) {
	return {
		tagName,
		children: [],
		appendChild(child) {
			this.children.push(child)
		},
	}
}

function getOptions(element) {
	return element.children.flatMap((child) => child.tagName === 'option' ? child : getOptions(child))
}

test('the rendered script filter includes Yi', () => {
	const { selects } = loadFilterOptions()
	const yi = getOptions(selects.script).find((option) => option.value === 'yiii')

	assert.ok(yi, 'expected an option matching the GitHub label s:yiii')
	assert.equal(yi.textContent, 'Yi')
})

test('script filter values are unique ISO 15924 codes', () => {
	const { filters } = loadFilterOptions()
	const values = filters.script
		.map((item) => item.value)
		.filter(Boolean)

	assert.equal(new Set(values).size, values.length)
	for (const value of values) assert.match(value, /^[a-z]{4}$/)
})

test('script-label comparison detects drift in both directions', () => {
	const pageCodes = new Set(['latn', 'yiii'])
	const githubCodes = new Set(['hang', 'latn'])

	assert.deepEqual(compareScriptCodes(pageCodes, githubCodes), {
		missingFromPage: ['hang'],
		missingFromGitHub: ['yiii'],
	})
})
