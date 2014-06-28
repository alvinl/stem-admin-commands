Stem admin commands
===================

### Installation

1. `npm install git://github.com/alvinlz/stem-admin-commands.git`
2. Add `"stem-admin-commands": {}` to plugins.json

### Commands

- `help` Shows a list of commands
- `set status <status>` Changes the bots status
  - Statuses: `online`, `away`, `busy`, `snooze`, `tradeready`, `playready`
- `set botname <bot name>` Changes the bots display name
- `toggle trading <enable / disable>` Changes the bots trading state
- `version` Displays the bots version
- `log off` Logs the bot off