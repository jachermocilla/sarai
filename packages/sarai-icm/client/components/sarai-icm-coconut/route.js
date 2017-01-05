FlowRouter.route("/icm-coconut", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "ICMCoconut"})
		else goHome();
	}
})
