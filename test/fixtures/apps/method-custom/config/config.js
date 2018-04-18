'use strict';

exports.keys = 'test key';

exports.security = {
  //defaultMiddleware: 'methodnoallow',
  methodnoallow: {
    methods: {
      GET: false,
      TRACE: true
    }
  }
};
