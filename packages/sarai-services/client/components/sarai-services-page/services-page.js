Template.ServicesPage.onCreated(function() {
	Meteor.subscribe('services');

})

Template.ServicesPage.onRendered(function(){
	$("main").scrollTop(0);
})

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
	service: () => {
		const service = Services.findOne({_id: FlowRouter.current().params._id});

		return service && service
	},

	title: () => {
		const service = Services.findOne({_id: FlowRouter.current().params._id});

		return service && service.title
	},

	tagline: () => {
		const service = Services.findOne({_id: FlowRouter.current().params._id});

		return service && service.tagline
	},

	thumbnail: () => {
		const service = Services.findOne({_id: FlowRouter.current().params._id});
		return service && service.thumbnail
	},

	crops: () => {
		const service = Services.findOne({_id: FlowRouter.current().params._id})

		return service && service.info.crops
	},

	experts: () => {
		const service = Services.findOne({_id: FlowRouter.current().params._id})

		return service && service.info.experts
	},

	ura: () => {
		const service = Services.findOne({_id: FlowRouter.current().params._id})

		return service && service.info.ura
	},

	projectLeaders: () => {
		const service = Services.findOne({_id: FlowRouter.current().params._id})

		return service && service.info.projectLeaders
	},

	mediaLink: () => {
		const service = Services.findOne({_id: FlowRouter.current().params._id})

		return service && service.media.link
	},

	mediaType: () => {
		const service = Services.findOne({_id: FlowRouter.current().params._id})

		return service && service.media.type
	},

	mediaSubtitle: () => {
		const service = Services.findOne({_id: FlowRouter.current().params._id})

		return service && service.media.subtitle
	},

	mediaSubtitleLink: () => {
		const service = Services.findOne({_id: FlowRouter.current().params._id})

		return service && service.media.subtitleLink
	},


	col1Title: () => {
		const service = Services.findOne({_id: FlowRouter.current().params._id})

		return service && (service.col1.title == '' ? 'The Challenge' : service.col1.title)
	},

	col2Title: () => {
		const service = Services.findOne({_id: FlowRouter.current().params._id})

		return service && (service.col2.title == '' ? 'Solution' : service.col2.title)
	},

	col1Content: () => {
		const service = Services.findOne({_id: FlowRouter.current().params._id})

		return service && service.col1.content
	},

	col2Content: () => {
		const service = Services.findOne({_id: FlowRouter.current().params._id})

		return service && service.col2.content
	},

	nextservice: () => {
		const currentservice = Services.findOne({_id: FlowRouter.current().params._id});

		if(currentservice){
			var nextsort = currentservice.sort + 1;
			if(nextsort<=Services.find().count()){
				return Services.findOne({'sort': nextsort});
			}
		}
	},

	prevservice: () => {
		const currentservice = Services.findOne({_id: FlowRouter.current().params._id});

		if(currentservice){
			var prevsort = currentservice.sort - 1;
			if(prevsort>0){
				return Services.findOne({'sort': prevsort});
			}
		}
	},

	mediaIsYoutubeVideo: () => {
		const currentservice = Services.findOne({_id: FlowRouter.current().params._id})

		if (currentservice) {
			if (currentservice.mediaType == 'youtube-video') {
				return true
			}

			else {
				return false
			}
		}
	},

	notEmpty: (array) => {
		if (array.length > 0) {
			return true
		}

		else {
			return false
		}
	}
});



