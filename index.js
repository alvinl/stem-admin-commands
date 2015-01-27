
module.exports = function (Stem) {

  var commands = require('./commands');

  Stem.api.addCommand(/^help/, commands.help, { permission: 'admin' });

  Stem.api.addCommand(/^log off/, commands.logOff, { permission: 'admin' });

  Stem.api.addCommand(/^version/, commands.version, { permission: 'admin' });

  Stem.api.addCommand(/^set status (.*)/, commands.setStatus, { permission: 'admin' });

  Stem.api.addCommand(/^set botname (.*)/, commands.setBotname, { permission: 'admin' });

  Stem.api.addCommand(/^toggle trading (.*)/, commands.toggleTrading, { permission: 'admin' });

};
