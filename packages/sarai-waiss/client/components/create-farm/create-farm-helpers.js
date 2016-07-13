Template.WAISSCreateFarm.helpers({
    isLoggedIn: function() {
        return Meteor.userId();
    },
    weatherStation: function() {
        return WeatherStations.find();
    }
});

Template.WAISSCreateFarm.events({
    'click #createFarm': function(e) {
        e.preventDefault();

        var farmName = $('#farmName').val();
        var farmLocation = $('#farmLocation').val();
        var soilType = $('#soilType').val();
        var weatherStation = WeatherStations.findOne({
            label: $('#weatherStationField').val()
        }).id;
        var crop = $('#cropName').val();
        var variety = $('#varietyName').val();
        var plantingDate = new Date($('#plantingDate').val());

        if(!farmName || !farmLocation || !soilType || !crop || !variety || !plantingDate) {
            alert('Please fill out all the fields!');
            return;
        }

        console.log('name: ' + farmName);
        console.log('location: ' + farmLocation);
        console.log('soil type: ' + soilType);
        console.log('crop: ' + crop);
        console.log('variety: ' + variety);
        console.log('planting date: ' + plantingDate);

        var farmInfo = {
            userId: Meteor.userId(),
            name: farmName,
            crop: crop,
            variety: variety,
            plantingDate: plantingDate,
            location: farmLocation,
            weatherStation: weatherStation,
            soilType: soilType
        }

        Meteor.call('createFarm', farmInfo, function(error, result) {
            if(error) {
                console.error(error);
                return;
            }

            alert(result.name + ' has been succesfully created!');
            FlowRouter.go('/waiss');
        })
    }
})