FlowRouter.route("/apps/:_id", {
	name: 'apps',
	action: function(params, queryParams) {
		console.log("Yeah! We are on the post:", params._id);
		console.log("Query parameters:", queryParams);
		BlazeLayout.reset();
		BlazeLayout.render("MainLayout", {main: "AppsPage"});
	}
});
