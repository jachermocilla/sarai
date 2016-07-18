if (Apps.find().count() === 0) {

	Apps.insert({
		name: 'weather-monitoring',
		title: 'Weather Monitoring',
		appUrl: 'https://project-sarai-alpha-tjmonsi1.c9users.io/weather-monitoring'
	});
}