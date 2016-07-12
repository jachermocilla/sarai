Template.MainHeader.helpers({
  
  isSuitability: function(){
  	var routeName = FlowRouter.getRouteName();
  	console.log("Current route name is: ", routeName);
    if("SuitabilityMaps"== routeName){
      return true;
    }else{
      return false;
    }
  },
  navAdmin: function(){
		if(Meteor.userId()===null){
			$("#navA").hide();
		}
		else{
			$("#navA").show();
		}
	},
  configureAccountType: function(){
    if (!Meteor.user().profile){
      Meteor.call('updateAccountType', "Registered");
    }
  }
});

Template.MainHeader.events({
    'click #manage-account': function(event){
        event.preventDefault();
        FlowRouter.go("/pests-manage-account");
    }
});


LoggedIn = function(){
	if(Meteor.userId()===null){
		return false;
	}
	else{
		return true;
	}
}
