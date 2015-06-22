'use strict';

angular.module('itslikeApp')
    .directive('spotifyTile', function(audiohandler) {
        return {
            templateUrl: 'components/spotify-tile/spotify-tile.html',
            restrict: 'E',
            scope: {
                result: '='
            },
            link: function(scope, element, attrs) {
                scope.audioObject= null;
                var justClicked= false;
                scope.playPreview = function(songurl, event) {
                    console.log("CLICKED THE ALBUM ART");
                    console.log(event.target);
                    console.log(songurl);
                    if ($(event.target).hasClass('playing')) {
                        //pauses track if user clicks on an already playing track
                        scope.audioObject.pause();
                        $(event.target).removeClass('playing');

                    } else {
                        //plays track
                        justClicked = true;
                        audiohandler.audioClick();
                        scope.audioObject = new Audio(songurl);
                        scope.audioObject.play();
                        scope.audioObject.onended=function(){
$(event.target).removeClass('playing');
                        };
                        $(event.target).addClass('playing');
                        $()
                    }

                }
               
                


                function callback(){
                    if(justClicked){
                        justClicked=false;
                    }else if(scope.audioObject != null){   
                        scope.audioObject.pause();
                        $(element).find('.album-art').removeClass('playing');
                    }

                }

                audiohandler.registerAudio(callback)
            }
        };


    });