define('filters',['mustache','jquery'], function(Mustache, $) { /*ignore*/
  var ourTemplate = Mustache.compile("<div id='f-region'>"
+    "<div>{{hello_world}}</div>"
+    "<div>{{#uppercase}}Message: {{hello_world}}.{{/uppercase}}</div></div>");

  var view = {
    uppercase: function() {
      return function (text, render) {
        return render(text).toUpperCase();
      }
    },
    hello_world: function() { return "hello world"; }
    //hello_world: "hello_world"
  }

  $("#f-button-id").click(function(data) {
    $('#f-region').remove();
    $("#f-button-id").after(ourTemplate(view));
  });

});/*ignore*/
