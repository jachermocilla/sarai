FlowRouter.route("/admin/rainfall-outlook", {
  triggersEnter: [ isAdminRedirect ],
  action: function() {
    BlazeLayout.render("CMSLayoutV2", {main: "RainfallOutlookCMS"})
  }
})