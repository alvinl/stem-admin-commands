
module.exports = function (Stem) {

  var bot = Stem.bot;

  Stem.utils.addHandler(bot, 'friendMsg', require('./friendMsg'));
  
};