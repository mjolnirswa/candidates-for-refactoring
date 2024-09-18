const match = rawHeaderLine.match(headerPattern);

headers.set(match[1].toLowerCase(), match[2]);
// Этот код работает при условии, что метод match всегда находит совпадения
// однако, если регулярное выражение (headerPattern) не найдет совпадений, match будет null, 
// и это приведет к ошибке при попытке обращения к match[1] и match[2].
