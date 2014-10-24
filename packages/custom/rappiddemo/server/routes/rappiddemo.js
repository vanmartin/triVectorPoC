'use strict';

// The Package is past automatically as first parameter
module.exports = function(Rappiddemo, app, auth, database) {

  app.get('/rappiddemo/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/rappiddemo/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/rappiddemo/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/rappiddemo/example/render', function(req, res, next) {
    Rappiddemo.render('index', {
      package: 'rappiddemo'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
