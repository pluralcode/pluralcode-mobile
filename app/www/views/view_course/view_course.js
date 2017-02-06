
angular.module("App")
.controller("ViewCourseController", function ($scope, $state, $stateParams, $ionicLoading, $http, Auth) {
	$ionicLoading.show({
			template: 'Loading course...',
		});
	$scope.course_id = $stateParams.course_id;
	$scope.email = Auth.getEmail();
	$scope.password = Auth.getPassword();
	$http.get("http://apis.pluralcode.com.ng/public/student/view_course/" + $scope.course_id + "?email=" + $scope.email + "&password=" + $scope.password)
			.success( function (data) {
			$scope.course = data;
			$ionicLoading.hide();
	}).error( function (err) {
			console.log("could not load lessons")
	});
	
	$scope.load_chapter = function (id) {
		$state.go("tabs.view_chapter",{"course_id":$scope.course_id, "chapter_id": id});
	};
	//$scope.load_video = function (video_url) {
	//	$state.go("tabs.video_viewer", {video_url:video_url});
	//};
	
});