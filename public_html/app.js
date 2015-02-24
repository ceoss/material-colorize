/* global angular */
/* global escape */
'use strict'; // jshint ignore:line

angular
    .module('material-colorize', [
        'ngRoute',
        'lumx',
        'hljs',
        'Services'
    ])
    .controller('AppController', function(LxNotificationService)
    {
        $scope.dropdownAlert = function()
        {
            LxNotificationService.info('Clicked!');
        };

    });