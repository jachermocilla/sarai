FlowRouter.route("/icm-corn-farm-mechanization", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "FarmMechanization"})
		else goHome();
	}
})
