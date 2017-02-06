
angular.module("App")
.controller("HomeController", function ($scope, $state, Auth) {
	$scope.load_classrooms = function () {
		$state.go("tabs.classrooms");
	};
	$scope.load_editor = function () {
		$state.go("tabs.workspace")
	};
	$scope.load_archive = function() {
		$state.go("tabs.offline_archives")
	};
	$scope.load_achievements = function () {
		$state.go("tabs.achievements")
	};
	$scope.load_live_mentor = function () {
		$state.go("tabs.live_mentor")
	};
	$scope.load_contact_us = function () {
		$state.go("tabs.contact-us")
	};
	$scope.load_invite = function() {
		$state.go("tabs.invite")
	};
	$scope.load_buyrubbies = function() {
		$state.go("tabs.buy_rubbies")
	};
	$scope.load_profile = function() {
		$state.go("tabs.profile")
	};
	$scope.logout = function() {
		Auth.logout();
		$state.go("login");
	};
	$scope.balance = Auth.getBalance();
})