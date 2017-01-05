FlowRouter.route("/icm-corn-land-prep", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "LandPrep"})
		else goHome();
	}
})
