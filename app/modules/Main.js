define([
  // Application.
  "app"
],

// Map dependencies from above array.
function(app) {

  // Create a new module.
  var Main = app.module();

  // Default model.
  Main.Model = Backbone.Model.extend({
  
  });

  // Default collection.
  Main.Collection = Backbone.Collection.extend({
    model: Main.Model
  });

  // Return the module for AMD compliance.
  return Main;

});
