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