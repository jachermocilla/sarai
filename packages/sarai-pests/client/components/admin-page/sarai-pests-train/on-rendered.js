Template.TrainPest.onRendered(function() {
	$('#PestLibraryTab').attr('style', 'background-color: #b3b3b3');
});

Template.TrainPest.onDestroyed(function() {
	$('#PestLibraryTab').removeAttr('style');
});