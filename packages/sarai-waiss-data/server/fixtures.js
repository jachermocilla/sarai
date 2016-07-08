if(Farm.find().count() === 0) {
    var userId = 'CQYQGAmy6wi3phsos';

    Farm.insert({
        userId: userId,
        name: 'JC\'s Corn Farm',
        crop: 'Corn',
        variety: 'Sweet',
        location: 'Silangan Road, UPLB, Laguna',
        soilType: 'loam'
    });

    Farm.insert({
        userId: userId,
        name: 'JC\'s Rice Farm',
        crop: 'Rice',
        variety: 'Sticky',
        location: 'Silangan Road, UPLB, Laguna',
        soilType: 'loam'
    });
}