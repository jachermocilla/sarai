Meteor.methods({
	'cms-rainfall-outlook-content-update' : (text) => {
		var xlsx = Npm.require('node-xlsx');
		var fs = Npm.require('fs');
		var obj = xlsx.parse(fs.readFileSync(text));
		var map = obj[0];
		rainfall_data = map['data'];
		if(rainfall_data[0][1].toLowerCase()=='municipality'){
			Meteor.call('cms-rainfall-outlook-content-parser',rainfall_data,0);	
		}else{
			Meteor.call('cms-rainfall-outlook-content-parser',rainfall_data,1);	
		}
		console.log('sample-end');
	},

	'cms-rainfall-outlook-content-parser' : (rainfall_data, type) => {
		var months = [];
		var province, municipality;
		var data, data_start;

		var utf8 = Npm.require('utf8');

		data_start = (type==0) ? 2 : 1;

		for(var i = data_start ; i < rainfall_data[0].length ; i++){
			months[i-data_start] = rainfall_data[0][i];
		}

		for(var i = 1; i < rainfall_data.length; i++){
			province = rainfall_data[i][0];
			municipality = (type==0) ? utf8.decode(rainfall_data[i][data_start-1]) : "All";
			console.log(municipality);
			data = WeatherOutlook.findOne({province: province, municipality: municipality}).data;
			for(var j = data_start; j < rainfall_data[i].length ; j++){
				data.month[months[j-data_start]] = rainfall_data[i][j];
			}
			WeatherOutlook.update(
				{province: province, municipality: municipality},
				{
					$set:{
						data
					}
				},
				{ upsert : true }
			);
		}
	}
});