Template.TrainPest.helpers({
	IsLoggedIn: function(){
		if(Meteor.userId()===null){
			FlowRouter.go('/pests-lib');
			FlowRouter.redirect('/pests-lib');
		}
		else{
			return true;
		}
	}
});