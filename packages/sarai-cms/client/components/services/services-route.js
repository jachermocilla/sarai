FlowRouter.route("/admin/services", {
  action: function() {
    // if(isLoggedIn())
      BlazeLayout.render("CMSLayoutV2", {main: "ServicesCMS"})
    // else goHome();
  }
})
