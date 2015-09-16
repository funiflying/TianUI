var TUIApp = angular.module('TUIApp', ['ngRoute', 'love.service']);
TUIApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/tui', {
        templateUrl: '/admin/partials/tui.html'
    });
    $routeProvider.otherwise({
        redirectTo: '/tui'
    })

}])