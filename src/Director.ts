class Calendar {
  // нет типизации
  addEvent(event) {
    // some logic to add event
  }
}

class Director {
  calendar: Calendar;

  constructor(calendar: Calendar) {
    this.calendar = calendar;
  }

  scheduleMeeting(event) {
    // scheduleMeeting вызывает метод calendar.addEvent, но event не имеет явной типизации
    this.calendar.addEvent(event);
  }
}
