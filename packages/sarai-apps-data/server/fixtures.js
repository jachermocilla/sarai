if (Apps.find().count() === 0) {

	Apps.insert({
		name: 'weather-monitoring',
		title: 'Weather Monitoring',
		frame: '<iframe src="https://project-sarai-alpha-tjmonsi1.c9users.io/weather-monitoring"></iframe>'
	});
}