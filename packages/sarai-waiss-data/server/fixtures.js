if(Farm.find().count() === 0) {
    const aMonthAgo = new Date();
    const aWeekAgo = new Date();

    aMonthAgo.setMonth(aMonthAgo.getMonth() - 1);
    aWeekAgo.setDate(aWeekAgo.getDate() - 7);

    Farm.insert({
        'public': true,
        'name': 'My Sweet Corn Farm',
        'crop': 'Corn',
        'variety': 'Sweet Corn',
        'plantingDate': aMonthAgo,
        'location': 'Los Baños, Laguna',
        'soilType': 'loam'
    });

    Farm.insert({
        'public': false,
        'name': 'My Other Corn Farm',
        'crop': 'Corn',
        'variety': 'Very Sweet Corn',
        'plantingDate': aWeekAgo,
        'location': 'Los Baños, Laguna',
        'soilType': 'loam'
    });
}

if(CropData.find().count() === 0) {
    CropData.insert({
        'name': 'corn',
        'mad': 0.5,
        'cutoff': [25, 50, 88],
        'cropCoefficient': [0.3, 1.15, 1.05],
        'depthOfRootZone': 1,
        'gddAtMaturity': 1800
    })
}