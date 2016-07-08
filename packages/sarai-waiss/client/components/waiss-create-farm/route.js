FlowRouter.route("/waiss/create-farm", {
	action: function() {
        BlazeLayout.render("MainLayout", {
          main: "WAISSCreateFarm"    
        })
	}
})