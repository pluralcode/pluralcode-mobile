angular.module("App")
.controller("ViewChapterController", function ($scope, $state, $stateParams, $ionicLoading, $http, Auth) {
	$ionicLoading.show({
			template: 'Loading chapter...',
		});
	$scope.course_id = $stateParams.course_id;
	$scope.chapter_id = $stateParams.chapter_id;
	$scope.email = Auth.getEmail();
	$scope.password = Auth.getPassword();
	$http.get("http://apis.pluralcode.com.ng/public/student/view_chapter/" + $scope.course_id + "/" + $scope.chapter_id + "?email=" + $scope.email + "&password=" + $scope.password)
			.success( function (data) {
			$scope.chapter = data;
			$ionicLoading.hide();
	}).error( function (err) {
			console.log("could not load lessons")
	});
	
	$scope.load_content = function(lesson_id, chapter_id) {
		$state.go("tabs.lesson_content", {"lesson_id":lesson_id, "chapter_id":chapter_id});
	};
});
