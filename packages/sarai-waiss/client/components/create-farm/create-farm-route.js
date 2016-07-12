FlowRouter.route("/waiss/create-farm", {
	action: function() {
        BlazeLayout.render("WAISSLayout", {
          main: "WAISSCreateFarm"    
        })
	}
})