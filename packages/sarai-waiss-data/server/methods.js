// helper function to computer ETo using Hargreaves method
// TODO: Switch to PM method if more data becomes available
var computeETo = function(tmin, tmax, latitude, dayOfTheYear) {
    var solarDeclination = 0.409 * Math.sin(((2 * Math.PI * dayOfTheYear) / 365)- 1.39);
    var parameterX = 1 - ((Math.tan(latitude) * Math.tan(latitude)) * (Math.tan(solarDeclination) * Math.tan(solarDeclination)));
    var numerator = (-Math.tan(latitude)) * Math.tan(solarDeclination);
    var sunsetHourAngle = (Math.PI / 2) - Math.atan(numerator / Math.sqrt(parameterX));
    var dr = 1 + 0.033 * Math.cos((2 * Math.PI * dayOfTheYear / 365));
    var extraTerrestrialRadiation = 1440 / Math.PI * 0.082 * dr * ((sunsetHourAngle * Math.sin(latitude) * Math.sin(solarDeclination)) + (Math.cos(latitude) * Math.cos(solarDeclination) * Math.sin(sunsetHourAngle)));
    var ETo = 0.0023 * (((tmin + tmax) / 2) + 17.8) * Math.sqrt(tmax - tmin) * extraTerrestrialRadiation;

    return ETo;
}

Meteor.methods({
    'computeWaterDeficit': function(cropData, tmin, tmax, latitude, dayOfTheYear) {
        var ETo = computeETo(tmin, tmax, latitude, dayOfTheYear);

        var crop = CropData.findOne({
            'name': cropData.crop
        });

        console.log(ETo);
    }
});