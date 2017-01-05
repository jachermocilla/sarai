FlowRouter.route("/icm-corn-fertilizer", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "Fertilizer"})
		else goHome();
	}
})
