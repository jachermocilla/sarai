Template.SaraiPestsMonitor.onCreated(function() {
	Meteor.subscribe('plantProblem');
	Meteor.subscribe('cms');
})