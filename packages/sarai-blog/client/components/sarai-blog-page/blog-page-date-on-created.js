Template.BlogPageDate.onCreated(function() {
	Meteor.subscribe('blog');
});