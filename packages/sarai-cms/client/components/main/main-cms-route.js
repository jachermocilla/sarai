FlowRouter.route("/admin/main", {
  action: function() {
    // if(isLoggedIn())
      BlazeLayout.render("CMSLayoutV2", {main: "MainCMS"})
    // else goHome();
  }
})
