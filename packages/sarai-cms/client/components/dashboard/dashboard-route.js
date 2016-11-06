FlowRouter.route("/admin", {
  triggersEnter: [ isAdminRedirect ],
  action: function() {
    BlazeLayout.render("CMSLayoutV2", {main: "CMSDashboard"})
  }
})
