
module.exports = function (steamID, rawMessage, messageType) {
  
  var Stem     = this,
      bot      = this.bot,
      command  = rawMessage.toLowerCase(),
      isAdmin  = this.api.isAdmin(steamID),
      commands = rawMessage.toLowerCase().split(' ');

  // Ignore `is typing` messages
  if (messageType === 2) return;

  // Only allow admins to use these commands
  if (!isAdmin) return;

  if (command === 'help') {

    bot.sendMessage(steamID, 'Admin Commands:' + 
                            '\n - set status <online, busy, tradeready, away, snooze, playready>' +
                            '\n - set botname R2D2' +
                            '\n - <enable / disable> trading' +
                            '\n - version' +
                            '\n - log off');

  }
  
  // Command: set status (status)
  else if (commands[0] === 'set' && commands[1] === 'status') {

    var validStatuses = {

      'online':     1,
      'busy':       2,
      'away':       3,
      'snooze':     4,
      'tradeready': 5,
      'playready':  6

    };

    // Valid status was passed
    if ( validStatuses[commands[2]] ) {

      // Set the bots status
      bot.setPersonaState( validStatuses[commands[2]] );

      bot.sendMessage(steamID, 'Status has been set to ' + commands[2]);

    }

    // Invalid status was passed
    else {

      bot.sendMessage(steamID, 'Invalid bot status. Valid status\'s are: online, busy, away, snooze, tradeready, and playready');

    }

  }

  // Command: set botname (name)
  else if (commands[0] === 'set' && commands[1] === 'botname') {

    var botName = rawMessage.split(' ').slice(2).join(' ');

    // Valid botname was passed
    if (botName) {

      // Change the bots display name
      bot.setPersonaName(botName);

      bot.sendMessage(steamID, 'Botname was changed to: ' + botName);

    }

    // No botname was passed
    else {

      bot.sendMessage(steamID, 'Invalid botname. Example syntax: set botname R2D2');

    }

  }

  // Command: <enable / disable> trading
  else if (commands[0] === 'enable' && commands[1] === 'trading' ||
          commands[0] === 'disable' && commands[1] === 'trading') {

    var tradingState = (commands[0] === 'enable');

    // Current state matches state given by user
    if (Stem.states.tradeReady === tradingState) {

      bot.sendMessage(steamID, 'Trading is already ' + ( (tradingState ? 'enabled.' : 'disabled.') ));     
      return; 

    }

    // Change trading state
    Stem.states.tradeReady = tradingState;

    bot.sendMessage(steamID, 'Trading has been ' + ( tradingState ? 'enabled.' : 'disabled.' ));

  }

  // Command: version
  else if (command === 'version') {

    bot.sendMessage(steamID, 'Stem v' + Stem.version);

  }

  // Command: log off
  else if (command === 'log off') {

    bot.setPersonaState(0);

    bot.logOff();

  }

};
