Template.Testimonials.helpers({
  testimonialsMain: function(){
    var obj = Main.findOne({'name': 'testimonials'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
   },
  testimonials: function(){
  	var obj = Main.findOne({'name': 'testimonials'});
    if(typeof obj !== 'undefined'){
      return obj.testimonials;
    }
  }
});