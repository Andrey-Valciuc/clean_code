class Calendar {
    getEventsWithinMinutes(minutes) {
        return this.events.filter(event => {
            return event.startsWithinMinutes(minutes);
        });
    }
    notifiyUpcomingEvents() {
        this.getEventsWithinMinutes(10).forEach(event => {
            this.sendNotification(
                event.renderNotification()
            );
        });
    }
    // ...
}