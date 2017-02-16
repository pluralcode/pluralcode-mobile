
angular.module("App")
.controller("LessonContentController", function ($scope, $state, $stateParams, $ionicLoading, $http, Auth, $showdown) {
	$ionicLoading.show({
			template: 'Loading lesson...',
		});
	$scope.email = Auth.getEmail();
	$scope.password = Auth.getPassword();
	$scope.lesson_id = $stateParams.lesson_id;
	$scope.chapter_id = $stateParams.chapter_id;
	$http.get("http://apis.pluralcode.com.ng/public/student/view_lesson/" + $scope.chapter_id + "/" + $scope.lesson_id + "?email=" + $scope.email + "&password=" + $scope.password)
			.success( function (data) {
			$scope.lesson_content = data;
			$ionicLoading.hide();
	}).error( function (err) {
			console.log("could not load lessons")
	});
	
})
			

