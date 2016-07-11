Template.WAISSMain.helpers({
    isLoggedIn: function() {
        return Meteor.userId();
    },
    farms: function() {
        return Farm.find().fetch();
    },
    farmInfo: function() {
        return Farm.find({
            _id: Session.get('farmId')
        });
    }
});

Template.WAISSMain.events({
    'click .list-farm-item': function(e) {
        var currentFarm = $(e.target).attr('farmId');
        Session.set('farmId', currentFarm);
    }
});