FlowRouter.route("/waiss/explore", {
	action: function() {
        BlazeLayout.render("MainLayout", {
          main: "WAISSExplore"    
        })
	}
})