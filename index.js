var objectAssign = require('object-assign');

module.exports = function (message) {
  return objectAssign.apply(null, message.replace(/\'/g, '').split('\n').map(function (l) {
    var t = {};
    t[l.substr(0, l.indexOf('='))] = l.substr(l.indexOf('=') + 1);
    return t;
  }));
};
