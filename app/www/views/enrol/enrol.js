angular.module("App")
.controller("EnrollController", function ($scope, $state, $stateParams, $ionicLoading, $ionicPopup, $http, Auth) {
	$ionicLoading.show({
			template: 'Loading course...',
		});
	$scope.course_id = $stateParams.course_id;
	$scope.chapter_id = $stateParams.chapter_id;
	$scope.email = Auth.getEmail();
	$scope.password = Auth.getPassword();
	$http.get("http://apis.pluralcode.com.ng/public/student/view_course/" + $scope.course_id + "?email=" + $scope.email + "&password=" + $scope.password)
			.success( function (data) {
			$scope.course = data;
			$ionicLoading.hide();
	}).error( function (err) {
			$ionicLoading.hide();
				
				var alertPopup = $ionicPopup.alert({
					title: 'Error',
					template: "No Internet Connection"
				});
				return;
	});
	
	$scope.enroll = function () {
		$ionicLoading.show({
			template: 'Enrolling course...',
		});
		$http.get("http://apis.pluralcode.com.ng/public/student/enroll_course/" + $scope.course_id +"?email=" + $scope.email + "&password=" + $scope.password)
			.success(function (data) {
			
			if (data.error_code == 240) {
				$ionicLoading.hide();
				
				$state.go("tabs.classrooms",{},{reload: true});
				
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
			.error(function (err) {
			
				
		});
	};
	
	
});