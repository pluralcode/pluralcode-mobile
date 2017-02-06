
angular.module("App")
.controller("ClassroomsController", function ($scope, $http, $ionicPopup, $ionicLoading, $state, Auth) {
	$scope.email = Auth.getEmail();
	$scope.password = Auth.getPassword();
	$ionicLoading.show({
      template: 'Loading courses...',
    });
	$http.get("http://apis.pluralcode.com.ng/public/student/all_enrolled_course?email=" + $scope.email + "&password=" + $scope.password).success( function (data) {
		
		if (data.error_code == 240) {
				$ionicLoading.hide();
				$scope.enrolled_courses = data.courses;
				
			}
		else {
				$ionicLoading.hide();
				
				var alertPopup = $ionicPopup.alert({
					title: 'Error',
					template: data.message
				});
				return;
				
			};
		
		
	}).error (function (err) {
		$ionicLoading.hide();
				
				var alertPopup = $ionicPopup.alert({
					title: 'Error',
					template: "No Internet Connection"
				});
				return;
	});
	$http.get("http://apis.pluralcode.com.ng/public/student/all_courses?email=" + $scope.email + "&password=" + $scope.password).success( function (data) {
		
		if (data.error_code == 240) {
				$ionicLoading.hide();
				delete data["error_code"];
				$scope.more_courses = data;
				
			}
		else {
				$ionicLoading.hide();
				
				var alertPopup = $ionicPopup.alert({
					title: 'Error',
					template: data.message
				});
				return;
				
			};
		
	}).error(function (err) {
		
	});
	
	$scope.enroll = function (courseid) {
		$state.go("tabs.enroll",{"course_id":courseid});
	}
	
	$scope.view = function (course_id) {
	
		$state.go("tabs.view_course", {"course_id": course_id});
	
		
		
		
	};
	
})