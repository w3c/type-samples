# type-samples
A place to find and contribute examples of typographic features in text, especially from non-Latin scripts.

**Please do not use the issues in this repo to discuss typographic features.** Each issue should just be a referenceable storage location fo one image. Any comments below that image and its metadata should only refer to the image itself (eg. suitability, clarification, etc), and not lead to a general discussion about the feature illustrated. Those discussions should be moved elsewhere.

##How to find a sample
Use the **[Visual Index](https://w3c.github.io/type-samples/)** (Currently still a prototype.)

Click on a radio button in the right column to select what type of image you are interested in. Refine it by script/medium, if you want. Click on a thumbnail to see the image with metadata.

When looking at an issue, you can click on the image to see a larger version.

##How to submit an image##

_Warning: The current setup is experimental, and may change if a more effective method is found._

If you want to submit an image to the repo please raise an issue and follow these instructions.

###The issue title

Should have the following structure:
```
<script-tag> <lang-tag> <medium label> <one or more space-separated feature labels>
```

For example:

```
hebr he newsprint justification text-decoration
```

The script and lang tags should be those in BCP-47. [Find a tag](http://r12a.github.io/apps/subtags/).

The medium and feature labels should be taken from those provided for issues in this repo. If you need something different, leave me a note in the body of the issue.

###The issue body

Should start with an image. **There should only be one image per issue.** You should drag and drop the image into the issue, rather than point to it with a link.

After the image, use the following syntax:

```
---
tag: <feature label> <short description>
[possibly more lines like that just above]
source: <description of the source of the image, or a link>
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

Descriptions should be short and succinct, like titles.

You can add descriptive text below, if needed.  It's also helpful to provide a text transcription of the content in the image for those who want to create tests, so that they can copy and paste the text.

You won't be able to add github labels. They will be applied for you, and the picture will be added to the repo.

The `<feature label>` should be one of the following (the list is likely to grow over time):
`book, inscription, magazine, mockup, newsprint, printedmatter, signage, software, webpage, other`
