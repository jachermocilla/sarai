FlowRouter.route("/icm-corn", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "ICMCorn"})
		else goHome();
	}
})
