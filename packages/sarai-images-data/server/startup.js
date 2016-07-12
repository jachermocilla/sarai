Meteor.startup(function () {
	UploadServer.init({
	    tmpDir: process.env.PWD + '/server/uploads/tmp',
	    uploadDir: process.env.PWD + '/server/uploads/',
	    checkCreateDirectories: true, //create the directories for you
	    getFileName: function(fileInfo, formData) { 
	    	return Random.id()+".jpg"; 
	    }
  	})
});
