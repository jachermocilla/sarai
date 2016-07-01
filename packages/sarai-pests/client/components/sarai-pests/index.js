Template.SaraiPests.helpers({
	pests: function(){
		return PlantProblem.find({'type': 'Pest'},{limit: 12});
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
	bannerInfo: function(){
		return CMS.find({info:'finalSpid'});
	},
	imageURL: function(){
		var link = CMS.findOne({info:'finalSpid'});
		if(link.bannerImage=="")
			return "/packages/sarai_sarai-pests/public/images/banner2.jpg";
		else
			return link.bannerImage;
	},
	row1HeadText: function(){
		return CMS.findOne({info:'finalSpid'}).row1HeadText;
	},
	row1Image1: function(){
		var link = CMS.findOne({info:'finalSpid'});
		if(link.row1Image1=="")
			return "/packages/sarai_sarai-pests/public/images/armyworm.png";
		else
			return link.row1Image1;
	},
	row1Image2: function(){
		var link = CMS.findOne({info:'finalSpid'});
		if(link.row1Image2=="")
			return "/packages/sarai_sarai-pests/public/images/locust.png";
		else
			return link.row1Image2;
	},
	row3HeadText: function(){
		return CMS.findOne({info:'finalSpid'}).row3HeadText;
	},
	row3SubText: function(){
		return CMS.findOne({info:'finalSpid'}).row3SubText;
	}

});

Template.Control.helpers({
	row2HeadText: function(){
		return CMS.findOne({info:'finalSpid'}).row2HeadText;
	}
});