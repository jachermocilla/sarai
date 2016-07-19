FlowRouter.route("/waiss", {
	action: function() {
        BlazeLayout.render("MainLayout", {
          main: "WAISSMain"    
        })
	}
})