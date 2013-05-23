define('simple',['mustache','jquery'],function(Mustache, $) { /*ignore*/
var ourTemplate = Mustache.compile("<div>{{simpleData}}</div>");
$("#button-id").click(function() {
  $.getJSON("/simple.json", function(data) {
    $("#button-id").html(ourTemplate(data));
  });
});
}); /*ignore*/
