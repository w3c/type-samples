# type-samples
A place to find and contribute examples of typographic features in text, especially from non-Latin scripts.

**You can use the [Visual Index](https://w3c.github.io/type-samples/) to search for samples.** (Currently still a prototype.)

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

Should start with an image. There should only be one image per issue. You should drag and drop the image into the issue, rather than point to it with a link.

After the image, use the following syntax:

```
---
img: <image file name>
tag: <feature label> <short description>
[possibly more lines like that just above]
source: <description of the source of the image, or a link>
---
```

For example:
```
---
img: a841092a-f834-11e6-9d55-65efd06f1ea0.jpg
tag: font-style Oblique-styled text leaning to the left.
tag: abbreviation Heh with joining form and extended baseline in date.
source: Asharq al Awsat, p1, 12 Dec 1994
---
```

You can get the image name from the image placeholder just above.  Descriptions should be short and succinct, like titles.

You can add descriptive text below, if needed.  It's also helpful to provide a text transcription of the content in the image for those who want to create tests, so that they can copy and paste the text.

Github labels will be applied for you, and the picture will be added to the repo.
