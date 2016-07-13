/*****************************************************************************/
/* entityPage: Event Handlers */
/*****************************************************************************/
Template.ServicesPage.events({
});

/*****************************************************************************/
/* entityPage: Helpers */
/*****************************************************************************/
Template.ServicesPage.helpers({
	service: function(){
		console.log(FlowRouter.current().params._id);
		return Services.findOne({_id: FlowRouter.current().params._id});
	}
});

/*****************************************************************************/
/* entityPage: Lifecycle Hooks */
/*****************************************************************************/
Template.ServicesPage.created = function () {
};

Template.ServicesPage.rendered = function () {
	
};

Template.ServicesPage.destroyed = function () {
};
