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
	}
});

Template.MainHeader.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        FlowRouter.go("/pests");
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
