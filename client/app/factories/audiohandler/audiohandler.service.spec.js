'use strict';

describe('Service: audiohandler', function () {

  // load the service's module
  beforeEach(module('itslikeApp'));

  // instantiate service
  var audiohandler;
  beforeEach(inject(function (_audiohandler_) {
    audiohandler = _audiohandler_;
  }));

  it('should do something', function () {
    expect(!!audiohandler).toBe(true);
  });

});
