var imageURL = "";

Template.AddEntityDropzone.events({
  'dropped #dropzone': function(e) {
    FS.Utility.eachFile(e, function(file) {
        var newFile = new FS.File(file);
        
        Images.insert(newFile, function (error, fileObj) {
          if (error) {
            toastr.error("Upload failed... please try again.");
          } else {
            toastr.success('Upload succeeded!'), setTimeout(function() {
	            imageURL = '/cfs/files/images/' +fileObj._id;
	            $('.bannerZone').children('img').attr('src', imageURL);
            }, 800);
          }
      	});
      
    });
  }
});

Template.EntityCreate.events({
	'submit form': function(e){
			e.preventDefault();
		},
	'click #aBtn': function(e){
			e.preventDefault();
			
			var pestData = {
				name: $("#name").val(),
				type: $("#type").val(),
				eng_name: $("#common-names").val(),
				fil_name: $("#filipino-names").val(),
				sci_name: $("#scientific-name").val(),
				order: $("#order").val(),
				classification: $("#classification").val(),
				stage_threatening: $("#threatening-stage").val(),
				plant_affected: $("#plant-affected").val()==""? "Uncategorized" : $("#plant-affected").val(),
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
				fil_treatment: $("#fil-treatment").val(),
				image: imageURL
			};
			
			Meteor.call('insertPest', pestData);
			console.log("inserted");
		},
	'click #cBtn': function(e){
			e.preventDefault();
			history.back();
		}
});