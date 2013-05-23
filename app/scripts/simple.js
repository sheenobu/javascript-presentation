define('simple',['mustache','jquery'],function(Mustache, $) { /*ignore*/
// Mustache.compile returns a function
var ourTemplate = Mustache.compile("<div>{{simpleData}}</div>"); 
$("#button-id").click(function() {
  $.getJSON("/simple.json", function(data) {
    // call the function with our data.
    var newHtml = ourTemplate(data);      
    // inject it into the page.
    $("#button-id").html(newHtml);
  });
});
}); /*ignore*/
