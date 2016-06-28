FlowRouter.route("/pests-signup", {
	action: function() {
		BlazeLayout.render("MainLayout", {main: "SignUp"})
	}
})