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
      Meteor.call('updateAccountRole', []);
    }
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

Template._loginButtonsLoggedInDropdownActions.onRendered(function(){
    $("#login-buttons-open-change-password").before("<div class='login-button' id='login-buttons-manage-account'>Manage Account</div>");
    $("#login-buttons-manage-account").click(function(event) {
      FlowRouter.go("/pests-manage-account");
    });
});

