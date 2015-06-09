'use strict';

angular.module('itslikeApp')
  .factory('audiohandler', function () {
    // Service logic
    // ...

    var audioObjects = [];

    // Public API here
    return {

      registerAudio: function (callback) {
        audioObjects.push(callback);
      },
      audioClick: function () {
       for (var i = 0; i < audioObjects.length; i++) 
       {
         audioObjects[i]();
       };
      }
    };
  });
