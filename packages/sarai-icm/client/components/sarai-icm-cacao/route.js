FlowRouter.route("/icm-cacao", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "ICMCacao"})
		else goHome();
	}
})
