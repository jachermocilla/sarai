FlowRouter.route("/icm-rice", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "ICMRice"})
		else goHome();
	}
})
