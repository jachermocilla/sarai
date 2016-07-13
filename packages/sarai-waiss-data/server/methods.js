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

//helper function to compute the crop coefficient of a given crop
var computeKc = function(cropInfo, farmInfo) {
    if(farmInfo.maturity < cropInfo.cutoff[0]) {
        return cropInfo.cropCoefficient[0];
    }

    if(farmInfo.maturity < cropInfo.cutoff[1]) {
        return cropInfo.cropCoefficient[0] + 
               ((cropInfo.cropCoefficient[1] - cropInfo.cropCoefficient[0]) / (cropInfo.cutoff[1] - cropInfo.cutoff[0])) * 
               (farmInfo.maturity - cropInfo.cutoff[0]);
    } else {
        if(farmInfo.maturity > cropInfo.cutoff[2]) {
            return cropInfo.cropCoefficient[1] - 
               ((cropInfo.cropCoefficient[1] - cropInfo.cropCoefficient[2]) / (100 - cropInfo.cutoff[2])) * 
               (farmInfo.maturity - cropInfo.cutoff[2]);
        } else {
            return cropInfo.cropCoefficient[2];
        }
    }
}

Meteor.methods({
    'computeWaterDeficit': function(farmInfo, tmin, tmax, latitude, dayOfTheYear, date) {
        var ETo = computeETo(tmin, tmax, latitude, dayOfTheYear);

        var cropInfo = CropData.findOne({
            'name': farmInfo.crop.toLowerCase()
        });

        var Kc = computeKc(cropInfo, farmInfo);

        var ETa = ETo * Kc;

        var weather = WeatherData.findOne({
            'id': farmInfo.weatherStation,
            'date': {
                'year': date.getFullYear(),
                'month': date.getMonth(),
                'day': date.getDate()
            }
        });

        if(weather == null) {
            console.error('no weather data');
            throw new Meteor.Error(404, 'no weather data found');
        }

        var waterDeficit = farmInfo.waterDeficit;

        if(!waterDeficit) {
            waterDeficit = [];
            waterDeficit.push({
                'date': date,
                'data': ETa - weather.data.rainfall
            });
        } else {
            waterDeficit.push({
                'date': date,
                'data': ETa - weather.data.rainfall + waterDeficit[waterDeficit.length-1].data
            });
        }

        Farm.update({
            '_id': farmInfo._id
        },{
            $set: {
                'waterDeficit': waterDeficit
            }
        });
    },
    'createFarm': function(farmInfo) {
        Farm.insert(farmInfo);

        return {
            name: farmInfo.name
        }
    }
});