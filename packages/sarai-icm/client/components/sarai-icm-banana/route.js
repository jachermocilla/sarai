FlowRouter.route("/icm-banana", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "ICMBanana"})
		else goHome();
	}
})
