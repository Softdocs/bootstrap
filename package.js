// package metadata file for Meteor.js

/* global Package:true */

Package.describe({
  name: 'softdocs:bootstrap',  // http://atmospherejs.com/twbs/bootstrap
  summary: 'The most popular front-end framework for developing responsive, mobile first projects on the web. Modified for Softdocs',
  version: '4.0.0.3-alpha',
  git: 'https://github.com/softdocs/bootstrap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles([
    'dist/css/bootstrap.css',
    'dist/js/bootstrap.js'
  ], 'client');
});
