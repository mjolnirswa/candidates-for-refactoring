const hasNotFoundStatus = (response: Response) => {
  return response.status === HttpStatusCode.NOT_FOUND_404;
  // Хороший подход — использование HttpStatusCode для статусов, что делает код более читаемым и понятным.
  // однако, возможно, лучше объединить все проверки в одну функцию, чтобы избежать дублирования кода.
};

const hasForbiddenStatus = (response: Response) => {
  return response.status === HttpStatusCode.FORBIDDEN_403;
};

const hasServiceUnavailableStatus = (response: Response) => {
  // было бы неплохо вынести 503 в enum/константу тоже
  return response.status === 503;
};
