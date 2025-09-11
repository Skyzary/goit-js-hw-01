function getElementWidth(content, padding, border) {
border = parseFloat(border);
padding = parseFloat(padding);
content = parseFloat(content);
return content + 2 * (padding + border);
}


