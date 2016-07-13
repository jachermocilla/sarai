Template.TrainPest.helpers({
	myCallbacks: function() {
	    return {
			 finished: function(index, fileInfo, context) {
			 	Session.set('data',undefined);
			 	filename = "/server/uploads/"+fileInfo.name;
			 	console.log(fileInfo.name);
			 	Session.set("",filename);
			 	$('.jqDropZone').html("<img src=/upload/"+fileInfo.name+" width='100%' height='295px'/>");
			 	$.ajax({	
					type:"POST",
					url:"http://127.0.0.1:5000/addTrainingData",
					dataType:"json",
					data: 
						{
							'filename': filename,
						},
					success: function(result){
								
					},
					error: function(error){
						
					}
				});
			 }
	    }
	},
	pests: function(){
		return PlantProblem.find({'type': 'Pest'});
	},
});

Template.TrainPest.events({
	"click #add": function (event, template) {
			document.getElementById('showVal').onclick = function () {
		        el.value = sel.value;    
		    }
			$.ajax({
				type:"POST",
				url:"http://127.0.0.1:5000/addTrainingData",
				dataType:"json",
				data: 
					{
						'flag':'true',
						'type': 'pest',
						'target': event.target.id,
						'filename': Session.get("filename"),
					},
				success: function(result){
					
				},
				error: function(error){
					
				}
			});	
			Session.set("filename",undefined);

			console.log("INSERTED YAS")
  	},
  	"click .no": function (event, template) {
    			$.ajax({
					type:"POST",
					url:"http://127.0.0.1:5000/addTrainingData",
					dataType:"json",
					data: 
						{
							'flag': 'false',
							'filename': Session.get("filename"),
						},
					success: function(result){
						
					},
					error: function(error){
						
					}
				});	
    			Session.set("filename",undefined);
  	},

  	"click #save": function (event, template) {
    		e.preventDefault();
			FlowRouter.go("/pests-train");
  	}

});