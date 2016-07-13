Template.WAISSExplore.helpers({
    farms: function() {
        return Farm.find({
            'public': true
        }).fetch();
    },
    farmInfo: function() {
        return Farm.find({
            _id: Session.get('farmId')
        });
    }
});

Template.WAISSExplore.events({
    'click .list-farm-item': function(e) {
        var currentFarm = $(e.target).attr('farmId');
        var farmInfo = Farm.findOne({
            _id: currentFarm
        });
        Session.set('farmId', currentFarm);
    }
});