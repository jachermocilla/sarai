FlowRouter.route("/pests-cms", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("CMSLayout", {main: "SaraiPestsCMSPage"})
		else goHome();
	}
})
