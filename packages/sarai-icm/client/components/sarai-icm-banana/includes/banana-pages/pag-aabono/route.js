FlowRouter.route("/icm-banana-pagaabono", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("ICMLayout", {main: "Pagaabono"})
		else goHome();
	}
})
