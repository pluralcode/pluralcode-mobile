angular.module("App")
.controller("PostController", function ($scope, $state,$ionicLoading, $http, Auth, $ionicPopup) {
	$scope.email = Auth.getEmail();
	$scope.password = Auth.getPassword();
	$scope.name = Auth.getFullname();
	$scope.details = [
		{question: ""},
		{description: ""},
		{tags: ""},
		];
	
	$scope.post = function () {
		$ionicLoading.show ({
		template: "Loading posts"
	});
	$http.get("http://apis.pluralcode.com.ng/public/student/post_community_new?title=" + $scope.details.question + "&programming_language=python&description=" + $scope.details.question + "&source_code=postssource_code&documents=postsdocuments&email=" + $scope.email + "&password=" + $scope.password)
		.success ( function (data) {
		if (data.error_code == 240) {
				$ionicLoading.hide();
				$state.go("tabs.notifications", {}, { reload: true });
				
			}
		else {
				$ionicLoading.hide();
				
				var alertPopup = $ionicPopup.alert({
					title: 'Error',
					template: data.message
				});
				return;
				
			};
	})
	.error (function (err) {
		$ionicLoading.hide();
				
				var alertPopup = $ionicPopup.alert({
					title: 'Error',
					template: "No Internet Connection"
				});
				return;
	});
	}
});