class FilmController {
  openDetails() {
    const popup = new Popup();// Здесь создается новый экземпляр Popup каждый раз, когда вызывается openDetails
    // возможно, это приведет к тому, что при каждом открытии будет создаваться новый объект Popup, 
    // даже если предыдущий все еще доступен в DOM или не был корректно закрыт
    this.popupOpened = true; // Значение устанавливается, но свойство popupOpened нигде не инициализируется в классе.
  }

  isPopupOpened() {
    return this.popupOpened;
  }
}
