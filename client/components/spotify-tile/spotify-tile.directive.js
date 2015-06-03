'use strict';

angular.module('itslikeApp')
  .directive('spotifyTile', function () {
    return {
      templateUrl: 'components/spotify-tile/spotify-tile.html',
      restrict: 'E',
      scope:{result:'='},
      link: function (scope, element, attrs) {
      	
      }
    };
  });

 