FlowRouter.route("/admin/services", {
  triggersEnter: [ isAdminRedirect ],
  action: (params, queryParams) => {
    BlazeLayout.render("CMSLayoutV2", {main: "ServicesCMS"})
  }
})


FlowRouter.route("/admin/services/:_id", {
  name: 'services',
  triggersEnter: [ isAdminRedirect ],
  action: (params, queryParams) => {
    BlazeLayout.reset();
    BlazeLayout.render("CMSLayoutV2", {main: "ServicesCMSForm"});
  }
});
