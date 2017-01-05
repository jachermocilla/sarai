FlowRouter.route("/icm-corn-processing", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "Processing"})
		else goHome();
	}
})
