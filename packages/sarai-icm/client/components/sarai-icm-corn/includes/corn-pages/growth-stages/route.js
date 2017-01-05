FlowRouter.route("/icm-corn-growth-stages", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "GrowthStages"})
		else goHome();
	}
})
