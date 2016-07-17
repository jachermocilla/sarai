Meteor.startup(function () {
	UploadServer.init({
	    tmpDir: process.env.PWD + '.uploads/.tmp',
	    uploadDir: process.env.PWD,
	    checkCreateDirectories: true, //create the directories for you
      overwrite: true,
      getDirectory: function(fileInfo, formData) {
        // create a sub-directory in the uploadDir based on the content type (e.g. 'images')
        switch(formData.uploadGroup) {
          case ('main'):
            return '.uploads/main/'
          default:
            return 'server/uploads/'
        }
      },
	    getFileName: function(fileInfo, formData) {
        //check fileInfo.type (image/jpeg)
        console.log(formData.filename)
	    	return formData.filename +".jpg";
	    },
      finished: (fileInfo, formFields) => {

      },
      validateRequest: (req, res) => {
        return true
      }
  	})

});