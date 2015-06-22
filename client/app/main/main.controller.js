'use strict';

angular.module('itslikeApp')
    .controller('MainCtrl', function($scope, $http, Spotify) {
        $scope.tempo = 0;
        $scope.originaltrack = "";
        $scope.artist = "";
        $scope.track = "";
        $scope.results =[];
        $scope.status ="";

        $scope.processData = function(event) {
            console.log("LOL CLICK!");
            event.preventDefault();
            var temp = $scope.originaltrack.split("-");
            $scope.artist = temp[0];
            $scope.track = temp[1];
            $(".song-results").removeClass("hidden");

            Spotify.search('artist:' + $scope.artist + ' track:' + $scope.track, 'track')
            	.then(function(data) {
                    console.log(data)
                        if(data.tracks.items.length==0){
                            $scope.status="Uh oh! We couldn't find that track!";
                            $scope.results =[];
                        }else{
                    	$scope.results= data.tracks.items;
                        $scope.status="We found "+$scope.results.length+" matching tracks! Which one did you want?";
                        }
                        
                })
                


        };
    });