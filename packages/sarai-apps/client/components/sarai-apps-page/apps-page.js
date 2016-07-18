/*****************************************************************************/
/* entityPage: Event Handlers */
/*****************************************************************************/
Template.AppsPage.events({
});

/*****************************************************************************/
/* entityPage: Helpers */
/*****************************************************************************/
Template.AppsPage.helpers({
	app: function(){
		return Apps.findOne({_id: FlowRouter.current().params._id});
	}
});

/*****************************************************************************/
/* entityPage: Lifecycle Hooks */
/*****************************************************************************/
Template.AppsPage.created = function () {
};

Template.AppsPage.rendered = function () {
	
};

Template.AppsPage.destroyed = function () {
};
