Template.SaraiPestsId.helpers({
	pests: function(){
		return PlantProblem.find({'type': 'Pest'},{limit: 8});
	},
	diseases: function(){
		return PlantProblem.find({'type': 'Disease'},{limit: 8});
	},
	imageName: function(str){
		return str.replace(/\s/g, '');
	},
	equals: function(v1, v2) {
		return (v1 === v2);
	},
	charLimit: function(str){
		return str.substring(0,160) + "...";
	},
	titleCharLimit: function(str){
		if(str.length > 13)
			return str.substring(0,12) + "...";

		return str;
	},
	myCallbacks: function() {
	    return {
			 finished: function(index, fileInfo, context) {
			 	Session.set('data',undefined);
			 	filename = "../server/uploads/"+fileInfo.name;
			 	Session.set("filename",filename);
			 	$('.jqDropZone').html("<img src=/upload/"+fileInfo.name+" width='100%' height='295px'/>");
			 	$.ajax({	
					type:"POST",
					url:"http://127.0.0.1:5000/pestImageSearch",
					dataType:"json",
					data: 
						{
							'filename': filename,
						},
					success: function(result){
						Session.set('data',result.data);
						console.log(result.data);		
					},
					error: function(error){
						console.log(error.data);
					}
				});
			 }
	    }
	  },
	data: function(){
		values=[];
		if(Session.get('data')){
			for(var i = 0;i<Session.get('data').length;i++){
				values.push(PlantProblem.findOne({'type': 'Pest','name':Session.get('data')[i].name}));
			}
		}
		return values;
	},
});