'use strict';

const mm = require('egg-mock');

describe('test/method_not_allow_custom.test', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/method-custom',
      plugin: 'security',
    });
    return app.ready();
  });

  afterEach(mm.restore);

  after(() => app.close());

  it('should not allow get method', () => {
    return app.httpRequest()
      .get('/')
      .set('accept', 'text/html')
      .expect(405);
  });

  it('should allow trace method', () => {
    return app.httpRequest()
      .trace('/')
      .set('accept', 'text/html')
      .expect(200);
  });

});
