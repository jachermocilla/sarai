Template.EntityCreate.onRendered(function() {
	$('#PestLibraryTab').attr('style', 'background-color: #b3b3b3');
	$("main").scrollTop(0);
});

Template.EntityCreate.onDestroyed(function() {
	$('#PestLibraryTab').removeAttr('style');
});