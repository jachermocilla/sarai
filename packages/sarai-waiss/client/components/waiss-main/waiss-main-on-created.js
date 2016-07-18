Template.WAISSMain.onCreated(function() {
    Meteor.subscribe('farm');
    Meteor.subscribe('crop');
    Meteor.subscribe('water-management-tips');
});

/*Template.WAISSGraphTemplate.onRendered(function() {
    var self = this;

    self.autorun(function() {
        var data = Template.currentData();
        $('#' + data.chartId).highcharts({
            chart: {
                height: 300
            },
            title: {
                text: 'Water Deficit',
                x: -20 //center
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Water, mm'
                }
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Management Allowable Depletion',
                data: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
            }]
        });
    });
});*/