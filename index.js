var newIcons = require('./new_icons.json');

module.exports = function patch(SUIR) {
  var libIcons = SUIR.ALL_ICONS_IN_ALL_CONTEXTS

  newIcons.forEach(function(name) {
    libIcons.push(name);
  });
}
