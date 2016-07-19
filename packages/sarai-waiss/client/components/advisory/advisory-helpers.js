Template.Advisory.helpers({
    determineAdvisory: function() {
        var data = Template.currentData();
        var mad = CropData.findOne({
            'name': data.farm.crop.toLowerCase()
        }).mad;
        var waterDeficit = data.farm.data.waterDeficit[data.farm.data.waterDeficit.length-1].data;

        if(waterDeficit > mad) {
            return {
                advisoryClass: 'advisory-danger',
                message: 'You should water your farm! Your farm\'s soil moisture is currently ' + Math.abs((waterDeficit-mad).toFixed(2)) + ' mm below the management allowable depletion!'
            }
        } else if((mad-waterDeficit) < (mad*10) && (mad-waterDeficit) >= mad) {
            return {
                advisoryClass: 'advisory-warning',
                message: 'You should consider watering your farm soon. Your farm\'s soil moisture is currently ' + Math.abs((waterDeficit-mad).toFixed(2)) + ' mm above the management allowable depletion!'
            }
        } else {
            return {
                advisoryClass: 'advisory-info',
                message: 'Your farm\'s soil moisture is currently ' + Math.abs((waterDeficit-mad).toFixed(2)) + ' mm above the management allowable depletion. Keep it up!'
            }
        }
    }
});