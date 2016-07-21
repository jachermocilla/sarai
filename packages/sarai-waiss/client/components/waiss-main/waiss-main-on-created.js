Template.WAISSMain.onCreated(function() {
    Meteor.subscribe('farm', Meteor.userId());
    Meteor.subscribe('crop');
    Meteor.subscribe('weather-stations');
    Meteor.subscribe('water-management-tips');
});

Template.WAISSMain.onRendered(function() {
    Session.set('farmId', null);

    var dialog = document.querySelector('#addIrrigationDialog')

    dialog.querySelector('.cancel').addEventListener('click', function() {
        dialog.close();
    });

    dialog.querySelector('.save').addEventListener('click', function() {
        var amount = parseInt($('#irrigationAmount').val());
        var date = new Date($('#irrigationDate').val())

        if(!amount || !date) {
            alert('Please fill out all fields.')
        } else {
            dialog.close();
        }
    });
});