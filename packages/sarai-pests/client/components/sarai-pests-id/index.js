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
			 	Session.set("spinner", true);
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
						Session.set("spinner", false);
						Session.set('data',result.data);
						console.log(result.data);		
					},
					error: function(error){
						Session.set("spinner", false);
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
	ontologyData: function(){
		values=[];
		if(Session.get('ontology')){
			Session.set("spinner", false);
			for(var i = 0;i<Session.get('ontology').length;i++){
				values.push(PlantProblem.findOne({'type': 'Pest','name':Session.get('ontology')[i]}));
			}
		}
		return values;
	},
	numberized: function(index){
		return (index+1) + ". ";
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
			return "Image Processing's Top Results";
	},
	ontologyBasedResultsHeader: function(){
		if (Session.get('ontology'))
			return "Ontology-Based Top Results";
	},
	enableSpinner: function(){
		return Session.get("spinner");
	}
});


Template.SaraiPestsId.events({
	'click .ontology-search': function(e){
		Session.set("spinner", true);
		e.preventDefault();
		var pestTally = {};

		var ontologySelectFields = {
			".crops-affected [type=checkbox]:checked" : "plant_affected",
			".observed-pest [type=checkbox]:checked" : "classification",
			".damage-appearance [type=checkbox]:checked" : "symptoms",
			".description-of-damage [type=checkbox]:checked" : "symptoms",
			".parts-of-plant [type=checkbox]:checked" : "part_destroyed",
			".distribution-of-symptoms [type=radio]:checked" : "symptoms",
			".insect-damage [type=radio]:checked" : "description"
		};

		var ontologyTextFields = {
			".crops-affected [type=text]" : "plant_affected",
			".observed-pest [type=text]" : "classification",
			".damage-appearance [type=text]" : "symptoms",
			".description-of-damage [type=text]" : "symptoms",
			".parts-of-plant [type=text]" : "part_destroyed",
			".distribution-of-symptoms [type=text]" : "symptoms",
			".insect-damage [type=text]" : "description"
		};

		$.each(ontologySelectFields, function(selector, field) {
			$(selector).map(function() {
				var query = { type: "Pest"};
				query[field] = { $regex: ".*" + $(this).val() + ".*", $options: "i"};
				var pestMatches = PlantProblem.find(query);
				pestMatches.forEach(function(pestObj){
				  pestTally[pestObj.name] = pestTally[pestObj.name] == NaN || pestTally[pestObj.name] == undefined ? 1 : pestTally[pestObj.name] + 1;
				});
			});
		});

		$.each(ontologyTextFields, function(selector, field){
			if ($(selector).val() != ""){
				var query = { type: "Pest"};
				query[field] = { $regex: ".*" + $(selector).val() + ".*", $options: "i"};
				var pestMatches = PlantProblem.find(query);
				pestMatches.forEach(function(pestObj){
				  pestTally[pestObj.name] = pestTally[pestObj.name] == NaN || pestTally[pestObj.name] == undefined ? 1 : pestTally[pestObj.name] + 1;
				});
			}
		});

		var descendingPests = Object.keys(pestTally).sort(function(a,b){return pestTally[b]-pestTally[a]});
		Session.set('ontology', descendingPests.length >= 5? descendingPests.slice(0,5) : descendingPests.slice(0,descendingPests.length));
	}
});