FlowRouter.route("/icm-cacao-pest-management", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "CacaoPestManagement"})
		else goHome();
	}
})
