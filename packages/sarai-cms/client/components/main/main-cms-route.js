FlowRouter.route("/admin/main", {
  triggersEnter: [ isAdminRedirect ],
  action: function() {
    BlazeLayout.render("CMSLayoutV2", {main: "MainCMS"})
  }
})
