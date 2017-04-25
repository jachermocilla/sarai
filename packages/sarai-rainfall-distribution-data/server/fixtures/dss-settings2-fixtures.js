if (!DSSSettings2.findOne({name: 'wunderground-api-key'})) {
  DSSSettings2.insert({
    name: 'wunderground-api-key',
    value: '8f5e9a760ffcb63f'
  });
}