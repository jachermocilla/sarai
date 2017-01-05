FlowRouter.route("/icm-cacao-management", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "CacaoManagement"})
		else goHome();
	}
})
