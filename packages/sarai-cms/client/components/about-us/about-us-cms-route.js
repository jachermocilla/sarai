FlowRouter.route("/admin/about-us", {
  action: function() {
    // if(isLoggedIn())
      BlazeLayout.render("CMSLayoutV2", {main: "AboutUsCMS"})
    // else goHome();
  }
})
