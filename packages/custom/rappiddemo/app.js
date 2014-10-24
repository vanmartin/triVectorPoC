'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Rappiddemo = new Module('rappiddemo');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Rappiddemo.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Rappiddemo.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Rappiddemo.menus.add({
    title: 'rappiddemo example page',
    link: 'rappiddemo example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  Rappiddemo.aggregateAsset('css', 'joint.all.css', {weight: 1});
  Rappiddemo.aggregateAsset('css', 'bpmn.css', {weight: 2});
  Rappiddemo.aggregateAsset('css', 'rappiddemo.css', {weight: 3});
  //Rappiddemo.aggregateAsset('js', 'gd.js', {weight: 4});
  //Rappiddemo.aggregateAsset('js', 'client.js', {weight: 5});
  //Rappiddemo.aggregateAsset('js', 'joint.all.js', {weight: 6});
  //Rappiddemo.aggregateAsset('js', 'keyboard.js', {weight: 7});
  //Rappiddemo.aggregateAsset('js', 'inspector.js', {weight: 8});
  //Rappiddemo.aggregateAsset('js', 'bpmn.js', {weight: 9});

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Rappiddemo.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Rappiddemo.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Rappiddemo.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Rappiddemo;
});
