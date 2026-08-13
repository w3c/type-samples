var typeSampleFilters = {
	topics: [
		{ value: '', label: 'All topics', translations: { 'zh-hans': '所有主题' } },
		{
			label: 'Text direction',
			translations: { 'zh-hans': '文本方向' },
			options: [
				{ value: 'writing_mode', label: 'Writing mode', translations: { 'zh-hans': '行文模式' } },
				{ value: 'bidi_text', label: 'Bidirectional text', translations: { 'zh-hans': '双向文本' } },
			],
		},
		{
			label: 'Glyph shaping & positioning',
			translations: { 'zh-hans': '字形的变形与定位' },
			options: [
				{ value: 'fonts', label: 'Fonts & font styles', translations: { 'zh-hans': '字型与字型样式' } },
				{ value: 'glyphs', label: 'Context-based shaping & positioning', translations: { 'zh-hans': '基于上下文的字形变形与定位' } },
				{ value: 'cursive', label: 'Cursive text', translations: { 'zh-hans': '连写文本' } },
				{ value: 'letterforms', label: 'Letterform slopes, weights, & italics', translations: { 'zh-hans': '斜体、字重与意大利体' } },
				{ value: 'transforms', label: 'Case & other transforms', translations: { 'zh-hans': '大小写与其他变换' } },
			],
		},
		{
			label: 'Typographic units',
			translations: { 'zh-hans': '排版单元' },
			options: [
				{ value: 'encoding', label: 'Characters & encoding', translations: { 'zh-hans': '字符与编码' } },
				{ value: 'segmentation', label: 'Grapheme/word segmentation & selection', translations: { 'zh-hans': '字素、词语的分割与选择' } },
			],
		},
		{
			label: 'Punctuation & other inline features',
			translations: { 'zh-hans': '标点符号与其他行内特性' },
			options: [
				{ value: 'punctuation_etc', label: 'Phrase & section boundaries', translations: { 'zh-hans': '短语与章节边界' } },
				{ value: 'quotations', label: 'Quotations & citations', translations: { 'zh-hans': '引文' } },
				{ value: 'emphasis', label: 'Emphasis & highlighting', translations: { 'zh-hans': '强调与突出显示' } },
				{ value: 'abbrev', label: 'Abbreviation, ellipsis, & repetition', translations: { 'zh-hans': '缩写、省略与重复' } },
				{ value: 'inline_notes', label: 'Inline notes & annotations', translations: { 'zh-hans': '行内注与行间注' } },
				{ value: 'text_decoration', label: 'Text decoration & other inline features', translations: { 'zh-hans': '文本标示与其他行内特性' } },
				{ value: 'data_formats', label: 'Data formats & numbers', translations: { 'zh-hans': '数据格式与数字' } },
			],
		},
		{
			label: 'Line & paragraph layout',
			translations: { 'zh-hans': '行与段落版式' },
			options: [
				{ value: 'line_breaking', label: 'Line breaking & hyphenation', translations: { 'zh-hans': '换行与断词连字' } },
				{ value: 'justification', label: 'Text alignment & justification', translations: { 'zh-hans': '文本对齐' } },
				{ value: 'spacing', label: 'Text spacing', translations: { 'zh-hans': '文本的间距调整' } },
				{ value: 'baselines', label: 'Baselines, line height, etc.', translations: { 'zh-hans': '基线、行高等' } },
				{ value: 'lists', label: 'Lists, counters, etc.', translations: { 'zh-hans': '列表、计数器等' } },
				{ value: 'initials', label: 'Styling initials', translations: { 'zh-hans': '首字样式' } },
			],
		},
		{
			label: 'Page & book layout',
			translations: { 'zh-hans': '页面与书籍版式' },
			options: [
				{ value: 'page_layout', label: 'General page layout & progression', translations: { 'zh-hans': '基本页面版式与装订方向' } },
				{ value: 'grids_tables', label: 'Grids & tables', translations: { 'zh-hans': '网格与表格' } },
				{ value: 'footnotes_etc', label: 'Footnotes, endnotes, etc.', translations: { 'zh-hans': '脚注、尾注等' } },
				{ value: 'headers_footers', label: 'Page headers, footers, etc.', translations: { 'zh-hans': '页眉、页脚等' } },
				{ value: 'interaction', label: 'Forms & user interaction', translations: { 'zh-hans': '表单与用户交互' } },
			],
		},
	],
	script: [
		{ value: '', label: 'All scripts', translations: { 'zh-hans': '所有文种' } },
		{ value: 'adlm', label: 'Adlam', translations: { 'zh-hans': '阿德拉姆字母' } },
		{ value: 'arab', label: 'Arabic', translations: { 'zh-hans': '阿拉伯字母' } },
		{ value: 'bopo', label: 'Bopomofo', translations: { 'zh-hans': '注音符号' } },
		{ value: 'cans', label: 'Canadian Aboriginal Syllabics', translations: { 'zh-hans': '加拿大原住民音节文字' } },
		{ value: 'cyrl', label: 'Cyrillic', translations: { 'zh-hans': '西里尔字母' } },
		{ value: 'deva', label: 'Devanagari', translations: { 'zh-hans': '天城文' } },
		{ value: 'ethi', label: 'Ethiopic', translations: { 'zh-hans': '吉兹字母' } },
		{ value: 'grek', label: 'Greek', translations: { 'zh-hans': '希腊字母' } },
		{ value: 'hang', label: 'Hangul', translations: { 'zh-hans': '韩古尔' } },
		{ value: 'hani', label: 'Chinese', translations: { 'zh-hans': '中文' } },
		{ value: 'hebr', label: 'Hebrew', translations: { 'zh-hans': '希伯来字母' } },
		{ value: 'jpan', label: 'Japanese', translations: { 'zh-hans': '日文' } },
		{ value: 'java', label: 'Javanese', translations: { 'zh-hans': '爪哇字母' } },
		{ value: 'khmr', label: 'Khmer', translations: { 'zh-hans': '高棉文' } },
		{ value: 'kore', label: 'Korean', translations: { 'zh-hans': '朝鲜语/韩国语' } },
		{ value: 'laoo', label: 'Lao', translations: { 'zh-hans': '老挝文' } },
		{ value: 'latn', label: 'Latin', translations: { 'zh-hans': '拉丁字母' } },
		{ value: 'mlym', label: 'Malayalam', translations: { 'zh-hans': '马拉雅拉姆文' } },
		{ value: 'mong', label: 'Mongolian', translations: { 'zh-hans': '蒙文' } },
		{ value: 'nkoo', label: "N'Ko", translations: { 'zh-hans': '西非书面字母' } },
		{ value: 'taml', label: 'Tamil', translations: { 'zh-hans': '泰米尔文' } },
		{ value: 'thai', label: 'Thai', translations: { 'zh-hans': '泰文' } },
		{ value: 'tibt', label: 'Tibetan', translations: { 'zh-hans': '藏文' } },
		{ value: 'yiii', label: 'Yi', translations: { 'zh-hans': '彝文' } },
	],
}

function getFilterLabel(item, language) {
	if (item.translations && item.translations[language]) return item.translations[language]
	return item.label
}

function appendFilterOptions(parent, items, language) {
	for (var i = 0; i < items.length; i++) {
		var item = items[i]
		var element

		if (item.options) {
			element = document.createElement('optgroup')
			element.label = getFilterLabel(item, language)
			appendFilterOptions(element, item.options, language)
		}
		else {
			element = document.createElement('option')
			element.value = item.value
			element.textContent = getFilterLabel(item, language)
		}

		parent.appendChild(element)
	}
}

function populateTypeSampleFilters() {
	var language = document.documentElement.lang.toLowerCase()

	for (var id in typeSampleFilters) {
		var select = document.getElementById(id)
		if (!select) continue

		select.textContent = ''
		appendFilterOptions(select, typeSampleFilters[id], language)
	}
}

document.addEventListener('DOMContentLoaded', populateTypeSampleFilters)
