angular.module("App")
.controller("MentorlistController", function ($scope, $state,$ionicLoading, $http, Auth, $ionicPopup, $location) {
	$scope.email = Auth.getEmail();
	$scope.password = Auth.getPassword();
	$ionicLoading.show ({
		template: "Loading mentors"
	});
	$http.get("http://apis.pluralcode.com.ng/public/home/all_staff")
		.success ( function (data) {
		if (data.error_code == 240) {
				$ionicLoading.hide();
				$scope.mentorlist = data;
				console.log(data);
				
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

      $scope.viewmentor = function(m) {
        //$state.go('news.detail', { NewsId: n.id });

        $location.url('tabs/live_mentor/' + m.username);
      }
});