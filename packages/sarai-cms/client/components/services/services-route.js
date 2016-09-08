FlowRouter.route("/admin/services", {
  action: (params, queryParams) => {
    // if(isLoggedIn())
      BlazeLayout.render("CMSLayoutV2", {main: "ServicesCMS"})
    // else goHome();
  }
})


FlowRouter.route("/admin/services/:_id", {
  name: 'services',
  action: (params, queryParams) => {
    BlazeLayout.reset();
    BlazeLayout.render("CMSLayoutV2", {main: "ServicesCMSForm"});
  }
});
