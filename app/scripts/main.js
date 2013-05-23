require.config({
    paths: {
        jquery:   '../bower_components/jquery/jquery',
        reveal:   '../bower_components/reveal.js/js/reveal',
        mustache: '../bower_components/mustache/mustache',
        highlight: 'vendor/highlight.min',
        ko:        '../bower_components/knockout/build/output/knockout-latest',
        mvvm:      'mvvm',
        simple:    'simple'
    },
    shim: {
        highlight: {
          exports: 'hljs'
        },
        reveal: {
            exports: 'Reveal'
        }
    }
});

require(['app', 'jquery','reveal', "mustache","simple","highlight","mvvm"], 
    function (app, $,Reveal, Mustache, simple, highlight) {
   'use strict';
    $(function() {
      //init presentation
      Reveal.initialize();

      highlight.initHighlightingOnLoad();

      // replace this widget with the code snippet
      $(".embedAMD").each(function() {
        var self = this;
        $.get($(self).text(), function(data) {
          data = data.replace(/^.*ignore.*$/mg, "");
          data = highlight.highlight('javascript',data).value;
          $(self).html("<pre><code></pre></code>").find("pre code").html(data).addClass("javascript");
        });
      });

      $(".embedF").each(function() {
        var self = this;
        $.get($(self).text(), function(data) {
          data = data.replace(/^.*ignore.*$/mg, "");
          $(self).html("<pre></pre>").find("pre").text(data);
        });
      });

 
    });
});
