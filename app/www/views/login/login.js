angular.module("App")
.controller("LoginController", function ($scope, $state) {
	
	$scope.login = function () {
	};
	$scope.signup = function () {
		$state.go("signup1");
	};
	
})