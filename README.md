# type-samples
A place to find and contribute examples of typographic features in text, especially from non-Latin scripts.

**Please do not use the issues in this repo to discuss typographic features.** Each issue should just be a referenceable storage location fo one image. Any comments below that image and its metadata should only refer to the image itself (eg. suitability, clarification, etc), and not lead to a general discussion about the feature illustrated. Those discussions should be moved elsewhere.

## How to find a sample
Use the **[Visual Index](https://w3c.github.io/type-samples/)** (Currently still a prototype.)

Click on a radio button in the right column to select what type of image you are interested in. Refine it by script/medium, if you want. Click on a thumbnail to see the image with metadata.

When looking at an issue, you can click on the image to see a larger version.

## How to submit an image


If you want to submit an image to the repo please raise an issue and follow these instructions. 

By submitting an image you indicate that you agree to be bound by the stipulations in [CONTRIBUTING.md](https://github.com/w3c/type-samples/blob/gh-pages/CONTRIBUTING.md). The repo is moderated.  If an image submission is accepted, the moderator will add the labels that make the issue visible in the index, but may edit the title and body text you provided before doing so.

### The issue title

Should have the following structure:
```
<script_tag> <lang_tag> <media_label> <index-label> [<more_index_labels>]
```

For example:

```
hebr he newsprint justification text-decoration
```

- Script and language tags must conform to BCP47. Find tags at https://r12a.github.io/app-subtags/
- The media label must be one of the violet-coloured labels at https://github.com/w3c/type-samples/labels **without the m:**. Use only only ONE media label in the issue title.
- There can be more than one, space-separated, index label. They must be one of the yellow labels at https://github.com/w3c/type-samples/labels **without the i:**.

It's important to get this line right if you want the picture to show up in [the index](https://w3c.github.io/type-samples/).

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

You can add descriptive text in comments below, if really needed.  It's also helpful to provide a text transcription of the content in the image for those who want to create tests, so that they can copy and paste the text.

You won't be able to add github labels. They will be applied for you. And you shouldn't need to use pull requests.

**Note:** This compilation is made available under the [Software and Document License](http://www.w3.org/Consortium/Legal/copyright-software). W3C makes no copyright assertions about the status of user-contributed images.
