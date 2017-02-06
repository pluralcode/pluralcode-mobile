angular.module("App").controller("tourController", function ($scope, $state) {
	
	$scope.login = function () {
		$state.go("login");
	};
});

