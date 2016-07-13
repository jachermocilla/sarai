/*****************************************************************************/
/* entityPage: Event Handlers */
/*****************************************************************************/
Template.ServicesPage.events({
	'click #nextbutton': function(e){
		e.preventDefault();
		var currentservice = Services.findOne({_id: FlowRouter.current().params._id});
		if(typeof currentservice!='undefined'){
			var nextsort = currentservice.sort + 1;
			var nextservice;
			if(nextsort<=Services.find().count()){
				nextservice = Services.findOne({'sort': nextsort});
			}
			FlowRouter.go('/services/'+nextservice._id);
			BlazeLayout.reset();
			BlazeLayout.render("MainLayout", {main: "ServicesPage"});
		}
	},
	'click #prevbutton': function(e){
		e.preventDefault();
		var currentservice = Services.findOne({_id: FlowRouter.current().params._id});
		if(typeof currentservice!='undefined'){
			var prevsort = currentservice.sort - 1;
			var prevservice;
			if(prevsort>0){
				prevservice = Services.findOne({'sort': prevsort});
			}
			FlowRouter.go('/services/'+prevservice._id);
			BlazeLayout.reset();
			BlazeLayout.render("MainLayout", {main: "ServicesPage"});
		}
	}
});

/*****************************************************************************/
/* entityPage: Helpers */
/*****************************************************************************/
Template.ServicesPage.helpers({
	service: function(){
		return Services.findOne({_id: FlowRouter.current().params._id});
	},
	nextservice: function(){
		var currentservice = Services.findOne({_id: FlowRouter.current().params._id});
		if(typeof currentservice!='undefined'){
			var nextsort = currentservice.sort + 1;
			if(nextsort<=Services.find().count()){
				return Services.findOne({'sort': nextsort});
			}
		}
	},
	prevservice: function(){
		var currentservice = Services.findOne({_id: FlowRouter.current().params._id});
		if(typeof currentservice!='undefined'){
			var prevsort = currentservice.sort - 1;
			if(prevsort>0){
				return Services.findOne({'sort': prevsort});
			}
		}
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
