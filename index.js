
module.exports = function (Stem) {

  var commands = require('./commands');

  Stem.api.addCommand('help', commands.help, 1);

  Stem.api.addCommand('log off', commands.logOff, 1);

  Stem.api.addCommand('version', commands.version, 1);

  Stem.api.addCommand('set status', commands.setStatus, 1);

  Stem.api.addCommand('set botname', commands.setBotname, 1);

  Stem.api.addCommand('toggle trading', commands.toggleTrading, 1);
  
};