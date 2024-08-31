class Calendar {
    getEventsAtLocation(targetLocation, kilometerRadius) {
        return this.events.filter(event => {
            return event.isEventWithinRadiusOf(
                targetLocation,
                kilometerRadius
            );
        });
    }
    // ...
}