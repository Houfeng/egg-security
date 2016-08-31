'use strict';

const utils = require('../utils');

module.exports = function nosniff(options) {
  return function* (next) {
    yield next;

    const opts = utils.merge(options, this.securityOptions.nosniff);
    if (utils.checkIfIgnore(opts, this.path)) return;

    this.set('x-content-type-options', 'nosniff');
  };
};