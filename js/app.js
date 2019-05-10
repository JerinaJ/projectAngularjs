var app = angular.module('myApp',['ngRoute','ngSanitize']);

app.config(['$routeProvider',function($routeProvider){
$routeProvider
	.when("/",{templateUrl:"partials/bookAdd.html",controller:"first"})
	.when("/add",{templateUrl:"partials/bookList.html",controller:"add"})
	.when("/empty",{templateUrl:"partials/bookEmpty.html",controller:"empty"})
	.when("/view",{templateUrl:"partials/bookView.html",controller:"view"})
	.when("/time",{templateUrl:"partials/flights.html",controller:"time"})
	.otherwise({redirectTo:"/"});
}]);