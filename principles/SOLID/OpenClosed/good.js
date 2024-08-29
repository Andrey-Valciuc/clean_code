new Event({
    title: 'Doctor Appointment',
    config: {
        renderCustomNotification: defaultNotification => {
            return `Urgent! ${defaultNotifcation}`;
        }
    }
});