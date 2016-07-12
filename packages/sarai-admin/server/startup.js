Meteor.startup(function () {
	UploadServer.init({
	    tmpDir: process.env.PWD + '/server/uploads/tmp',
	    uploadDir: process.env.PWD + '/.uploads',
	    checkCreateDirectories: true, //create the directories for you
      overwrite: true,
      getDirectory: function(fileInfo, formData) {
        // create a sub-directory in the uploadDir based on the content type (e.g. 'images')
        switch(formData.uploadGroup) {
          case ('main'):
            return '/main/'
          default:
            return '/server/uploads/'
        }
      },
	    getFileName: function(fileInfo, formData) {
	    	return formData.filename +".jpg";
	    },
      finished: (fileInfo, formFields) => {
        // console.log('Logging at startup.js')
      }
  	})
});