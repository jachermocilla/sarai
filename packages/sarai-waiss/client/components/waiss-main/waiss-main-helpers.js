Template.WAISSMain.helpers({
    isLoggedIn: function() {
        return Meteor.userId();
    },
    farms: function() {
        return Farm.find({
            'userId': Meteor.userId()
        }).fetch();
    },
    farmInfo: function() {
        return Farm.find({
            _id: Session.get('farmId')
        });
    },
    displayTip: function() {
        var returnObject = [];

        var tips = WaterManagementTips.find().fetch();
        returnObject.push(tips[Math.floor(Math.random() * ((tips.length-1) + 1))]);

        return returnObject;
    }
});

Template.WAISSMain.events({
    'click .list-farm-item': function(e) {
        var currentFarm = $(e.target).attr('farmId');
        var farmInfo = Farm.findOne({
            _id: currentFarm
        });
        Session.set('farmId', currentFarm);
        //Meteor.call('computeWaterDeficit', farmInfo, 22.6, 28.5, 0.248, 192, new Date(2015, 11, 17));
    },
    'click #createFarm': function(e) {
        e.preventDefault();

        FlowRouter.go('/waiss/create-farm');
    }
});
