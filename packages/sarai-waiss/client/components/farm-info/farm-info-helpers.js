Template.FarmInfo.helpers({
    formatDate: function(date) {
        var months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]
        return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    }
})