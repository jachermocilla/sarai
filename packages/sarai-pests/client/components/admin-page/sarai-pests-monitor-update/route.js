FlowRouter.route("/pests-monitor-update", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("CMSLayout", {main: "SaraiPestsMonitorUpdatePage"})
		else goHome();
	}
})
