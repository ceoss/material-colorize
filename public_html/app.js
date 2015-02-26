angular.module('material-colorize', ['ngRoute', 'lumx', 'hljs', 'Services'])
.controller('AppController', function(LxNotificationService) {
    $scope.dropdownAlert = function() {
            LxNotificationService.info('Clicked!');
    };
});