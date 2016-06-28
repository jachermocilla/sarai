FlowRouter.route("/pests-lab-result", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("MainLayout", {main: "SaraiPestsLabResultForm"})
		else goHome();
	}
})
