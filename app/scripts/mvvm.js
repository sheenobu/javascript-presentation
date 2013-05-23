define('mvvm', ['ko','jquery'], function(ko,$) { /* ignore */
var ViewModel = function(ajaxInterface,_ret) {
  var self = this;

  self.reload = function() {
    ajaxInterface.getName(function(name) {
      self.firstName = ko.observable(name.first);
      self.lastName = ko.observable(name.last);
      self.fullName = ko.computed(function() {
        return self.firstName() + " " + self.lastName();
      }, self);
      _ret(self);
    });
  };

  self.reload();

};

var AjaxInterface = function() {
  this.getName = function(cb) {
    $.getJSON("/scripts/name.json",function(data) {
      return cb(data);
    });
  }
};

var ajaxInterface = new AjaxInterface();
var viewModel     = new ViewModel(ajaxInterface, function(viewModel) {
  ko.applyBindings(viewModel);
});

}); /*ignore */
