FlowRouter.route("/icm-coffee-water-management", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "WaterManagement"})
		else goHome();
	}
})
