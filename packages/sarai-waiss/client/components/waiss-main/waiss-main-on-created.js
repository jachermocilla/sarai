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

        var farmInfo = Farm.findOne({
            _id: Session.get('farmId')
        });

        if(!amount || !date) {
            alert('Please fill out all fields.')
        } else {
            Meteor.call('updateWaterDeficitWithIrrigation', farmInfo, amount, date, function(error, result) {
                if(error) {
                    console.error(error);
                    return;
                }

                alert(result.name + ' was updated!');
            });
            dialog.close();
        }
    });
});