'use strict';

const defaultMethods = {
  TRACE: false,
  TRACK: false,
  OPTIONS: false,
};

// https://www.owasp.org/index.php/Cross_Site_Tracing
// http://jsperf.com/find-by-map-with-find-by-array
module.exports = options => {
  options = Object.assign({}, options);
  return function notAllow(ctx, next) {
    const methods = options.methods ? Object.assign({},
      defaultMethods, options.methods) : defaultMethods;
    // ctx.method is upper case
    if (methods[ctx.method] === false) {
      ctx.throw(405);
    }
    return next();
  };
};
