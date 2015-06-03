'use strict';

describe('Directive: spotifyTile', function () {

  // load the directive's module and view
  beforeEach(module('itslikeApp'));
  beforeEach(module('app/components/spotify-tile/spotify-tile.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<spotify-tile></spotify-tile>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the spotifyTile directive');
  }));
});