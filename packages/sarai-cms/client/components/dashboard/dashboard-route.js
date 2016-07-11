FlowRouter.route("/admin", {
  action: function() {
    // if(isLoggedIn())
      BlazeLayout.render("CMSLayoutV2", {main: "CMSDashboard"})
    // else goHome();
  }
})
