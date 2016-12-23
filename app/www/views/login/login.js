angular.module("App")
.controller("LoginController", function ($scope, $state, Auth) {
	
	$scope.login = function () {
		Auth.setUser("usersession");
		$state.go("tabs.home");
	};
	$scope.signup = function () {
		$state.go("signup1");
	};
	
})