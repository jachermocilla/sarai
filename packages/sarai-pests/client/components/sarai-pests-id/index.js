

Template.SaraiPestsId.helpers({
	pests: function(){
		return PlantProblem.find({'type': 'Pest'},{limit: 8});
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
			console.log("dumaan");
			for(var i = 0;i<Session.get('data').length;i++){
				values.push(PlantProblem.findOne({'type': 'Pest','name':Session.get('data')[i].name}));
			}
		}
		return values;
	},
	ontologyData: function(){
		values=[];
		if(Session.get('ontology')){
			for(var i = 0;i<5;i++){
				values.push(PlantProblem.findOne({'type': 'Pest','name':Session.get('ontology')[i]}));
			}
		}
		return values;
	},
	bannerInfo: function(){
		return CMS.find({info:'finalId'});
	},
	imageURL: function(){
		var link = CMS.findOne({info:'finalId'});
		if(link.bannerImage=="")
			return "/packages/sarai_sarai-pests/public/images/id_banner2.jpg";
		else
			return link.bannerImage;
	},
	pestHeader: function(){
		return CMS.findOne({info:'finalId'}).pestHeadText;
	},
	imageProcessingResultsHeader: function(){
		if(Session.get('data'))
			return "Image Processing's Top 5 Results";
	},
	ontologyBasedResultsHeader: function(){
		if (Session.get('ontology'))
			return "Ontology-Based Top 5 Results";
	}
});


Template.SaraiPestsId.events({
	'click .ontology-search': function(e){
		e.preventDefault();
		var pests = {};

		$(".crops-affected [type=checkbox]:checked").map(function() {
			var identifier = $(this).val();
			var pestMatches = PlantProblem.find({type: "Pest", plant_affected:{$regex:".*"+identifier+".*", $options: 'i'}});

			pestMatches.forEach(function(pestObj){
			  pests[pestObj.name] = pests[pestObj.name] == NaN || pests[pestObj.name] == undefined ? 1 : pests[pestObj.name] + 1;
			});
		});

		$(".observed-pest [type=checkbox]:checked").map(function() {
		    var identifier = $(this).val();
			var pestMatches = PlantProblem.find({type: "Pest", classification:{$regex:".*"+identifier+".*", $options: 'i'}});

			pestMatches.forEach(function(pestObj){
			  pests[pestObj.name] = pests[pestObj.name] == NaN || pests[pestObj.name] == undefined ? 1 : pests[pestObj.name] + 1;
			});
		});

		if ($(".observed-pest [type=text]").val() != ""){
			var identifier = $(".observed-pest [type=text]").val();
			var pestMatches = PlantProblem.find({type: "Pest", classification:{$regex:".*"+identifier+".*", $options: 'i'}});

			pestMatches.forEach(function(pestObj){
			  pests[pestObj.name] = pests[pestObj.name] == NaN || pests[pestObj.name] == undefined ? 1 : pests[pestObj.name] + 1;
			});
		}

		$(".damage-appearance [type=checkbox]:checked").map(function() {
		    var identifier = $(this).val();
			var pestMatches = PlantProblem.find({type: "Pest", symptoms:{$regex:".*"+identifier+".*", $options: 'i'}});

			pestMatches.forEach(function(pestObj){
			  pests[pestObj.name] = pests[pestObj.name] == NaN || pests[pestObj.name] == undefined ? 1 : pests[pestObj.name] + 1;
			});
		});

		if ($(".damage-appearance [type=text]").val() != ""){
			var identifier = $(".damage-appearance [type=text]").val();
			var pestMatches = PlantProblem.find({type: "Pest", symptoms:{$regex:".*"+identifier+".*", $options: 'i'}});

			pestMatches.forEach(function(pestObj){
			  pests[pestObj.name] = pests[pestObj.name] == NaN || pests[pestObj.name] == undefined ? 1 : pests[pestObj.name] + 1;
			});
		}

		$(".description-of-damage [type=checkbox]:checked").map(function() {
		    var identifier = $(this).val();
			var pestMatches = PlantProblem.find({type: "Pest", symptoms:{$regex:".*"+identifier+".*", $options: 'i'}});

			pestMatches.forEach(function(pestObj){
			  pests[pestObj.name] = pests[pestObj.name] == NaN || pests[pestObj.name] == undefined ? 1 : pests[pestObj.name] + 1;
			});
		});

		if ($(".description-of-damage [type=text]").val() != ""){
			var identifier = $(".description-of-damage [type=text]").val();
			var pestMatches = PlantProblem.find({type: "Pest", symptoms:{$regex:".*"+identifier+".*", $options: 'i'}});

			pestMatches.forEach(function(pestObj){
			  pests[pestObj.name] = pests[pestObj.name] == NaN || pests[pestObj.name] == undefined ? 1 : pests[pestObj.name] + 1;
			});
		}

		$(".parts-of-plant [type=checkbox]:checked").map(function() {
		    var identifier = $(this).val();
			var pestMatches = PlantProblem.find({type: "Pest", part_destroyed:{$regex:".*"+identifier+".*", $options: 'i'}});

			pestMatches.forEach(function(pestObj){
			  pests[pestObj.name] = pests[pestObj.name] == NaN || pests[pestObj.name] == undefined ? 1 : pests[pestObj.name] + 1;
			});
		});

		if ($(".parts-of-plant [type=text]").val() != ""){
			var identifier = $(".parts-of-plant [type=text]").val();
			var pestMatches = PlantProblem.find({type: "Pest", part_destroyed:{$regex:".*"+identifier+".*", $options: 'i'}});

			pestMatches.forEach(function(pestObj){
			  pests[pestObj.name] = pests[pestObj.name] == NaN || pests[pestObj.name] == undefined ? 1 : pests[pestObj.name] + 1;
			});
		}

		$(".distribution-of-symptoms [type=radio]:checked").map(function() {
		    var identifier = $(this).val();
			var pestMatches = PlantProblem.find({type: "Pest", symptoms:{$regex:".*"+identifier+".*", $options: 'i'}});

			pestMatches.forEach(function(pestObj){
			  pests[pestObj.name] = pests[pestObj.name] == NaN || pests[pestObj.name] == undefined ? 1 : pests[pestObj.name] + 1;
			});
		});

		if ($(".distribution-of-symptoms[type=text]").val() != ""){
			var identifier = $(".distribution-of-symptoms [type=text]").val();
			var pestMatches = PlantProblem.find({type: "Pest", symptoms:{$regex:".*"+identifier+".*", $options: 'i'}});

			pestMatches.forEach(function(pestObj){
			  pests[pestObj.name] = pests[pestObj.name] == NaN || pests[pestObj.name] == undefined ? 1 : pests[pestObj.name] + 1;
			});
		}

		$(".insect-damage [type=radio]:radio").map(function() {
		    var identifier = $(this).val();
			var pestMatches = PlantProblem.find({type: "Pest", description:{$regex:".*"+identifier+".*", $options: 'i'}});

			pestMatches.forEach(function(pestObj){
			  pests[pestObj.name] = pests[pestObj.name] == NaN || pests[pestObj.name] == undefined ? 1 : pests[pestObj.name] + 1;
			});
		});

		if ($(".insect-damage[type=text]").val() != ""){
			var identifier = $(".insect-damage [type=text]").val();
			var pestMatches = PlantProblem.find({type: "Pest", description:{$regex:".*"+identifier+".*", $options: 'i'}});

			pestMatches.forEach(function(pestObj){
			  pests[pestObj.name] = pests[pestObj.name] == NaN || pests[pestObj.name] == undefined ? 1 : pests[pestObj.name] + 1;
			});
		}

		Session.set('ontology', Object.keys(pests).sort(function(a,b){return pests[b]-pests[a]}));
	}
});