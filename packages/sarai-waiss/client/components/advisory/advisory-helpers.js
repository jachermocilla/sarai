Template.Advisory.helpers({
    shouldWarn: function() {
        var data = Template.currentData();
        var mad = CropData.findOne({
            'name': data.farm.crop.toLowerCase()
        }).mad;
        var waterDeficit = data.farm.data.waterDeficit[data.farm.data.waterDeficit.length-1].data;

        return waterDeficit > mad;
    },
    determineAdvisory: function() {
        var data = Template.currentData();
        var mad = CropData.findOne({
            'name': data.farm.crop.toLowerCase()
        }).mad;
        var waterDeficit = data.farm.data.waterDeficit[data.farm.data.waterDeficit.length-1].data;

        if(waterDeficit > mad) {
            return 'Your farm is currently ' + Math.abs((waterDeficit-mad).toFixed(2)) + ' mm below the management allowable depletion!'
        } else {
            return 'Your farm is currently ' + Math.abs((waterDeficit-mad).toFixed(2)) + ' mm above the management allowable depletion. Keep it up!'
        }
    }
});