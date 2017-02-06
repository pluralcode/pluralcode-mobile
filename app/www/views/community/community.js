angular.module("App")
.controller("CommunityController", function ($scope, $state,$ionicLoading, $http, Auth, $ionicPopup) {
	$scope.email = Auth.getEmail();
	$scope.password = Auth.getPassword();
	$ionicLoading.show ({
		template: "Loading posts"
	});
	$http.get("http://apis.pluralcode.com.ng/public/student/post_communinty_view_all?email=" + $scope.email + "&password=" + $scope.password)
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
	$scope.load_add_question = function () {
		$state.go("tabs.post");
	};
	$scope.view_post = function(pid) {
		$state.go("tabs.view_post", {'post_id': pid});
	}
});