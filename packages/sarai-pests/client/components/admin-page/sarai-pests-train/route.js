FlowRouter.route("/pests-train", {
	action: function() {
		if(isLoggedIn())
			BlazeLayout.render("CMSLayout", {main: "TrainPest"})
		else goHome();
	}
})