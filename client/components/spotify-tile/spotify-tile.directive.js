'use strict';

angular.module('itslikeApp')
    .directive('spotifyTile', function() {
        return {
            templateUrl: 'components/spotify-tile/spotify-tile.html',
            restrict: 'E',
            scope: {
                result: '='
            },
            link: function(scope, element, attrs) {


                scope.playPreview = function(songurl, event) {
                    console.log("CLICKED THE ALBUM ART");
                    console.log(event.target);
                    console.log(songurl);
                    if ($(event.target).hasClass('playing')) {
                        scope.audioObject.pause();
                        $(event.target).removeClass('playing');
                    } else {
                        scope.audioObject = new Audio(songurl);
                        scope.audioObject.play();
                        $(event.target).addClass('playing');
                    }

                }
            }
        };


    });