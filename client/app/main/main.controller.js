'use strict';

angular.module('itslikeApp')
    .controller('MainCtrl', function($scope, $http) {
            $scope.tempo = 0;
            $scope.originaltrack = "";
            $scope.artist = "";
            $scope.track = "";

            $scope.processData = function(event) {
                console.log("LOL CLICK!");
                event.preventDefault();
                var temp = $scope.originaltrack.split("-");
                $scope.artist = temp[0];
                $scope.track = temp[1];
                $.ajax({
                    url: 'https://api.spotify.com/v1/search',
                    data: {
                        q: 'artist:'+$scope.artist+' track:'+$scope.track,
                        type: 'track'
                    },
                    success: function(response) {
                        console.log(response);
                    }
                });



            };
        });

 