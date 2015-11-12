module.exports = function (message) {
  return message.replace(/\'/g, '').split('\n').map(function (l) {
    return {
      key: l.substr(0, l.indexOf('=')),
      value: l.substr(l.indexOf('=') + 1)
    };
  });
};
