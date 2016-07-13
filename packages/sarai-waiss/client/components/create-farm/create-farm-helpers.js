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

            var today = new Date();
            var currentDate = new Date(plantingDate);

            while(currentDate.getTime() < today.getTime()) {
                var weather = WeatherData.findOne({
                    'id': weatherStation,
                    'date': {
                        'year': currentDate.getFullYear(),
                        'month': currentDate.getMonth(),
                        'day': currentDate.getDate()
                    }
                });
                if(typeof weather !== undefined) {
                    console.log(weather.data.temp);
                }
                currentDate.setDate(currentDate.getDate() + 1);
            }

            alert(result.name + ' has been succesfully created!');
            FlowRouter.go('/waiss');
        })
    }
})