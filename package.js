Package.describe({
  git: 'https://github.com/rodcope1/meteor-collection-behaviours.git',
  name: 'rodcope1:collection-behaviours',
  summary: 'Define and attach behaviours to collections',
  version: '2.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'check',
    'coffeescript@2.0.0',
    'mongo'
  ]);

  api.addFiles([
    'lib/behaviours.coffee',
    'lib/mongo.coffee'
  ]);

  api.export('CollectionBehaviours');
});
