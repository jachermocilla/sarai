Template.BlogPageTag.onCreated(function() {
	Meteor.subscribe('blog');
});