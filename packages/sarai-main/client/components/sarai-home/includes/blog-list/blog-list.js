Template.Bloglist.helpers({
  blogMain: function(){
    var obj = Main.findOne({'name': 'blogs'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
   },
  blogs: function(){
    var names = [
      'training-cms',
      'simplifying-cs',
      'bringing-amdt',
      'project-sm',
      'joins-dost'
    ];
    var obj = Blog.find({name: {$in: names}}, {sort: {date: -1}}).fetch();
    if(typeof obj !== 'undefined'){
      var list = obj.slice(0,3);
      return list;
    }
  }
});

Template.registerHelper("makeString", function(date) {
    return new Date(date).toString('MM-dd-yyyy');
});