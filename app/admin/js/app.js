var loveApp = angular.module('loveApp', ['ngRoute', 'love.service']);
loveApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tui', {
        templateUrl: '/admin/partials/tui.html'
    });
    $routeProvider.otherwise({
        redirectTo: '/tui'
    })

}])