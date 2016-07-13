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
			
			var pestData = {
				id: $("#id").val(),
				name: $("#name").val(),
				type: $("#type").val(),
				eng_name: $("#common-names").val(),
				fil_name: $("#filipino-names").val(),
				sci_name: $("#scientific-name").val(),
				order: $("#order").val(),
				classification: $("#classification").val(),
				stage_threatening: $("#threatening-stage").val(),
				plant_affected: $("#plant-affected").val(),
				description: $("#description").val(),
				symptoms: $("#symptoms").val(),
				effect: $("#effect").val(),
				treatment: $("#treatment").val(),
				stage_plant_affected: $("#stage-plant-affected").val(),
				part_destroyed: $("#part-destroyed").val(),
				fil_stage_plant_affected: $("#fil-stage-plant-affected").val(),
				fil_effect: $("#fil-effect").val(),
				fil_part_destroyed: $("#fil-part-destroyed").val(),
				fil_stage_threatening: $("#fil-threatening-stage").val(),
				fil_symptoms: $("#fil-symptoms").val(),
				fil_description: $("#fil-description").val(),
				fil_plant_affected: $("#fil-plant-affected").val(),
				fil_classification: $("#fil-classification").val(),
				fil_treatment: $("#fil-treatment").val()
			};
			
			Meteor.call('updatePest', pestData);
			console.log("inserted");
		},
	'click #cBtn': function(e){
			e.preventDefault();
		}
});