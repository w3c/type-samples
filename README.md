# type-samples
A place to find and contribute examples of typographic features in text, especially from non-Latin scripts.

**Please do not use the issues in this repo to discuss typographic features.** Each issue should just be a referenceable storage location for one image. Any comments below that image and its metadata should only refer to the image itself (eg. suitability, clarification, etc), and not lead to a general discussion about the feature illustrated. Those discussions should be moved elsewhere.

## How to find a sample
Use the **[Visual Index](https://w3c.github.io/type-samples/)**, or just work directly with [the GitHub issues list](https://github.com/w3c/type-samples/issues), applying appropriate labels to filter the items.


## How to submit an image
If you want to submit an image to the repo please raise an issue and follow these instructions. 

By submitting an image you indicate that you agree to be bound by the stipulations in [CONTRIBUTING.md](https://github.com/w3c/type-samples/blob/gh-pages/CONTRIBUTING.md). The repo is moderated.  If an image submission is accepted, the moderator will add the labels that make the issue visible in the index, but may edit the title and body text you provided before doing so.


### The issue title
Should have the following structure:
```
<script_tag> <lang_tag>: <index-label> [<more_index_labels>]
```

For example:

```
hebr he: justification text_decoration
```

- Script and language tags must conform to BCP47. Find tags at https://r12a.github.io/app-subtags/
- There can be more than one, space-separated, index label. They must be one of the yellow labels at [https://github.com/w3c/type-samples/labels](https://github.com/w3c/type-samples/labels?q=i%3A) **without the i:**.

A W3C staff member will check the submission, and if accepted will apply the appropriate GitHub labels.


### The issue body
Should start with an image. **There should only be one image per issue.** You should drag and drop the image into the issue, rather than point to it with a link.

After the image, use the following syntax:

```
---
tag: <index_label> <short_description>
[possibly more lines like that just above]
source: <description of the source of the image, and a link for online resources>
---
```

For example:
```
---
tag: font-style Oblique-styled text leaning to the left.
tag: abbreviation Heh with joining form and extended baseline in date.
source: Asharq al Awsat, p1, 12 Dec 1994
---
```

There must be the same number of tag lines as there are index labels in the title. Each tag line must have **only one** index label.

Descriptions should be short and succinct, like titles. They should indicate what the image illustrates.

### Other stuff

You can add descriptive text in comments below, if really needed.  It's also helpful to provide a text transcription of the content in the image for those who want to create tests, so that they can copy and paste the text.

You won't be able to add github labels. They will be applied for you. And you shouldn't need to use pull requests.

**Note:** This compilation is made available under the [Software and Document License](http://www.w3.org/Consortium/Legal/copyright-software). W3C makes no copyright assertions about the status of user-contributed images.

## Adding a script

The list of scripts appears in two places:

1. The repository's [GitHub labels](https://github.com/w3c/type-samples/labels?q=s%3A), where script labels begin with `s:`.
2. The `script` list in [`index-data/filter-options.js`](index-data/filter-options.js), which supplies the page's **Filter by script** menu.

These lists do not update each other automatically. Whenever a script is added, update both lists.

To add a script:

1. Create its GitHub label, such as `s:yiii` for Yi.
2. In `index-data/filter-options.js`, find the `script` list. Copy a nearby line and change its `value`, English name, and translations. The `value` must exactly match the part of the GitHub label after `s:`.

GitHub automatically runs the check script labels test whenever either list changes. If the two lists differ, the test reports which entry is missing and where it needs to be added. A failed test immediately after changing the first list is expected; it will pass after the matching change is made and merged.

Contributors who use Node.js can optionally run the check using:

```sh
node scripts/check-script-labels.mjs
```
