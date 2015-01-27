
exports.help = function (steamID) {

  var Stem = this;

  Stem.bot.sendMessage(steamID, 'Admin Commands:' +
                                '\n - set status <online, busy, tradeready, away, snooze, playready>' +
                                '\n - set botname <bot name>' +
                                '\n - toggle trading <enable / disable>' +
                                '\n - version' +
                                '\n - log off');

};

exports.setStatus = function (steamID, command) {

  var Stem   = this,
      status = command.match[1];

  var validStatuses = {

    'online':     1,
    'busy':       2,
    'away':       3,
    'snooze':     4,
    'tradeready': 5,
    'playready':  6

  };

  // Invalid status or no status given
  if (!status || !validStatuses.hasOwnProperty(status))
    return Stem.bot.sendMessage(steamID, 'Invalid status. Valid status\'s are: online, busy, away, snooze, tradeready, and playready');

  // Change status
  Stem.bot.setPersonaState(validStatuses[status]);

  Stem.bot.sendMessage(steamID, 'Status has been set to ' + status);

};

exports.setBotname = function (steamID, command) {

  var Stem    = this,
      botName = command.match[1];

  // No bot name given
  if (!botName)
    return Stem.bot.sendMessage(steamID, 'Invalid botname. Example syntax: set botname R2D2');

  // Change the bots display name
  Stem.bot.setPersonaName(botName);

  Stem.bot.sendMessage(steamID, 'Botname was changed to: ' + botName);

};

exports.toggleTrading = function (steamID, command) {

  var Stem          = this,
      tradeStatus   = command.match[1],
      validStatuses = ['enable', 'disable'];

  if (tradeStatus) {

    var tradingState = (tradeStatus === 'enable');

    if (!~validStatuses.indexOf(tradeStatus))
      return Stem.bot.sendMessage(steamID, 'Invalid trade status. Example syntax: toggle trading <enable / disable>');

    Stem.states.tradeReady = tradingState;

    Stem.bot.sendMessage(steamID, 'Trading has been ' + ( tradingState ? 'enabled.' : 'disabled.' ));

  }

  else {

    Stem.states.tradeReady = !Stem.states.tradeReady;

    Stem.bot.sendMessage(steamID, 'Trading has been ' + ( Stem.states.tradeReady ? 'enabled.' : 'disabled.' ));

  }

};

exports.version = function (steamID) {

  var Stem = this;

  Stem.bot.sendMessage(steamID, 'Stem v' + this.version);

};

exports.logOff = function () {

  var Stem = this;

  Stem.bot.setPersonaState(0);

  Stem.bot.logOff();

};
