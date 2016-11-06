Template.WAISSCreateFarm.helpers({
    isLoggedIn: function() {
        return Meteor.userId();
    },
    redirectToExplorePage: function() {
        FlowRouter.go('/waiss/explore');
    },
    weatherStation: function() {
        var weatherStations = WeatherStations.find({id: 'ICALABAR18'}).fetch();
        weatherStations.unshift({
            'label': ''
        });
        return weatherStations;
    },
    crop: function() {
        var crops = CropData.find().fetch()
        crops.unshift({
            'name': ''
        });
        return crops;
    },
    shouldBeDisabled: function() {
        return !Session.get('currentCrop');
    },
    variety: function() {
        var crop = CropData.findOne({
            'name': Session.get('currentCrop')
        });
        var variety = crop.variety;
        variety.unshift('');

        return variety;
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

        var farmInfo = {
            userId: Meteor.userId(),
            name: farmName,
            crop: crop,
            variety: variety,
            plantingDate: plantingDate,
            location: farmLocation,
            weatherStation: weatherStation,
            soilType: soilType,
            public: $('#isPublicCheckbox')[0].checked,
            totalIrrigation: 0,
            totalRainfall: 0,
            totalEvapotranspiration: 0
        }

        Meteor.call('createFarm', farmInfo, function(error, result) {
            if(error) {
                console.error(error);
                return;
            }

            alert(result.name + ' has been succesfully created!');
            Session.set('farmId', result._id);
            FlowRouter.go('/waiss');
        })
    },
    'change #cropName': function(e) {
        Session.set('currentCrop', $('#cropName').val());
    }
})