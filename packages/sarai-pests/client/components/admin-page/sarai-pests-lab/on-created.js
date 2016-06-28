Template.SaraiPestsLabResultForm.onCreated(function() {
	Meteor.subscribe('assistance');
	Meteor.subscribe('plantProblem');
	Meteor.subscribe('clinicForm');
})
