Package.describe({
  git: 'https://github.com/rodcope1/meteor-collection-behaviours.git',
  name: 'rodcope1:collection-behaviours',
  summary: 'Define and attach behaviours to collections',
  version: '2.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8');

  api.use([
    'check',
    'coffeescript',
    'mongo'
  ]);

  api.addFiles([
    'lib/behaviours.coffee',
    'lib/mongo.coffee'
  ]);

  api.export('CollectionBehaviours');
});
