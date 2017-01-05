FlowRouter.route("/icm-coffee-processing", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "CoffeeProcessing"})
		else goHome();
	}
})
