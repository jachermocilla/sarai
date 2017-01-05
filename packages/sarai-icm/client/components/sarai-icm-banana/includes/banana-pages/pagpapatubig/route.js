FlowRouter.route("/icm-banana-pagpapatubig", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "Pagpapatubig"})
		else goHome();
	}
})
