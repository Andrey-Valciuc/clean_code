class Event {
    setTime(startTime, endTime) { }
    setTitle(title) { }
}

class Calendar {
    addEvent(event) { }
    removeEvent(event) { }
    getEventsBetween(stateDate, endDate) { }
}

class CalendarExporter {
    exportFilteredEventsToXML(filter) { }
    exportFilteredEventsToJSON(filter) { }
}
