angular.module("App")
.controller("ViewPostController", function ($scope, $state,$ionicLoading, $http, Auth, $ionicPopup, $stateParams) {
	$scope.email = Auth.getEmail();
	$scope.password = Auth.getPassword();
	
	
	$ionicLoading.show ({
		template: "Loading post..."
	});
	$http.get("http://apis.pluralcode.com.ng/public/student/post_view_single/" + $stateParams.post_id + "?email=" + $scope.email + "&password=" + $scope.password)
		.success ( function (data) {
		if (data.error_code == 240) {
				$ionicLoading.hide();
				$scope.posts = data.posts;
				
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
		
})