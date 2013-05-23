define('a_new_module',['jquery','mustache','text!templates/myTemplate.html'], function($, Mustache,myTemplateText) {
        var template = Mustache.compile(myTemplateText);
        return {
                fn1: function() { template(); },
                data1: ...
        };
});

define('another_module',['a_new_module','jquery'], function(a_new_module,$) {
        return { fn2: function() { a_new_module.fn1(); } }; 
});

require(['another_module'], function(another_module) {
  //application entry point
  another_module.fn2();
  //another_module.a_new_module.data1 // a_new_module is private!
});
