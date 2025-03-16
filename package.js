Package.describe({
  git: 'https://github.com/perfdog1/meteor-collection-behaviours.git',
  name: 'perfdog1:collection-behaviours',
  summary: 'Define and attach behaviours to collections',
  version: '3.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('3.0.1');

  api.use([
    'check',
    'coffeescript@2.0.0',
    'mongo@2.0.0'
  ]);

  api.addFiles([
    'lib/behaviours.coffee',
    'lib/mongo.coffee'
  ]);

  api.export('CollectionBehaviours');
});
