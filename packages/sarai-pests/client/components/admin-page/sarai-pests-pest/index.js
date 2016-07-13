Template.PestTabs.helpers({
	pestType: function () {
	  var data = PlantProblem.find().fetch();
	  var distinctData = _.uniq(data, false, function(d) {return d.plant_affected});
	  return _.pluck(distinctData, "plant_affected");
	},
	setActiveTab: function(index){
		return index == 0? "mdl-tabs__tab is-active" : "mdl-tabs__tab";
	},
	setActivePanel: function(index){
		return index == 0? "mdl-tabs__panel is-active" : "mdl-tabs__panel";
	},
	RewritePestType: function(){
		return this.replace(/[\s,]+/g, '');
	},
	displayPest: function(pestType){
		return PlantProblem.find({'type': 'Pest', 'plant_affected': pestType},{sort: {time: -1}});
	}
});