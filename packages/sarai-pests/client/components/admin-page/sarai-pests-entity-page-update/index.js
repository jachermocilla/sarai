Template.EntityPageUpdate.helpers({
	pest: function(){
		console.log(FlowRouter.current().params._id);
		return PlantProblem.findOne({_id: FlowRouter.current().params._id});
	}
});

Template.EntityDropzone.helpers({
	pest: function(){
		console.log(FlowRouter.current().params._id);
		return PlantProblem.findOne({_id: FlowRouter.current().params._id});
	},
	imageName: function(str){
		return str.replace(/\s/g, '');
	}
});

Template.EntityPageUpdate.events({
	'submit form': function(e){
			e.preventDefault();
		},
	'click #uBtn': function(e){
			e.preventDefault();
			
			/*Get Value*/
			var name = $("#name").val();
			var type = $("#type").val();
			var commonNames = $("#common-names").val();
			var filipinoNames = $("#filipino-names").val();
			var scientificName = $("#scientific-name").val();
			
			//Meteor.call('updateMonitor', bhead, bsubhead);
			
			console.log("inserted");
			$('#viewChanges').show();
		},
	'click #cBtn': function(e){
			e.preventDefault();
		},
	'click #viewChanges': function(e){
			e.preventDefault();
			FlowRouter.go("/pests-monitor");
		}

});