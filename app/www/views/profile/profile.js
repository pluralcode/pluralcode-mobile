
angular.module("App")
.controller("ProfileController", function ($scope, $ionicPopup, Auth) {
	
	$scope.email = Auth.getEmail();
	$scope.fullname = Auth.getFullname();
	$scope.phone = Auth.getPhone();
});