const DEFAULT_TIMEOUT = 5000;

function fetchData(url: string) {
  // Используем значение по умолчанию для таймаута

  // Использование fetch с опцией timeout некорректно, так как API fetch не поддерживает эту опцию.
  // чтобы реализовать таймаут, необходимо использовать дополнительную логику, например, с помощью Promise и setTimeout.
  fetch(url, { timeout: DEFAULT_TIMEOUT })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

  //нет обработки случаев, когда сервер возвращает статус ошибки (например, 4XX или 5XX).
}
