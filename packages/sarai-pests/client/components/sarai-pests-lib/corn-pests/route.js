FlowRouter.route("/corn-pests", {
	action: function() {
		BlazeLayout.render("MainLayout", {main: "SaraiCornPests"})
	}
})