if(Farm.find().count() === 0) {
    const userId = 'vcjfTseG2NyNuDG8t';
    const aMonthAgo = new Date();
    const aWeekAgo = new Date();

    aMonthAgo.setMonth(aMonthAgo.getMonth() - 1);
    aWeekAgo.setDate(aWeekAgo.getDate() - 7);

    Farm.insert({
        'userId': userId,
        'name': 'My Sweet Corn Farm',
        'crop': 'Corn',
        'variety': 'Sweet Corn',
        'plantingDate': aMonthAgo,
        'location': 'Los Baños, Laguna',
        'soilType': 'loam'
    });

    Farm.insert({
        'userId': userId,
        'name': 'My Banana Farm',
        'crop': 'Banana',
        'variety': 'Lakatan',
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