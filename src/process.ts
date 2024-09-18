processVerificationRequest();
makeUpdateRequest();
processDeletion();

// Если это все асинхронные операции, то лучше использовать Promise.all/allSettled + неплохо было бы обработать ошибки
