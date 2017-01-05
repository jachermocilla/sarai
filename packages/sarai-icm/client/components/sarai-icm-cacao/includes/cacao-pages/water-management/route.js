FlowRouter.route("/icm-cacao-water-management", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "CacaoWaterManagement"})
		else goHome();
	}
})
