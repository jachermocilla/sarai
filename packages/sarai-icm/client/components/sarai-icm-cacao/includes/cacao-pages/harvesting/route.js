FlowRouter.route("/icm-cacao-harvesting", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "CacaoHarvesting"})
		else goHome();
	}
})
