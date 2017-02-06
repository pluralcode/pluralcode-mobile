angular.module("App")
.controller("SignUpController", function ($scope, $ionicLoading, $ionicPopup, $state, $http, Auth) {
	$scope.details = [
		{name: ''},
		{email: ''},
		{phone_number: ''},
		{password: ''},
		{confirm_password: ''}
	];
	
	$scope.login = function () {
		$state.go('login');
	};
	
	$scope.next = function () {
		$ionicLoading.show({
			template: 'Please wait...',
		});
		if ($scope.details.password != $scope.details.confirm_password) {
			$ionicLoading.hide();
			$ionicPopup.alert({
				title: "Error",
				template: "Passwords do not match!"
			});
			return;
		};
		if(window.Connection) {
                if(navigator.connection.type == Connection.NONE) {
					$ionicLoading.hide();
                    $ionicPopup.alert({
                        title: "Internet Disconnected",
                        template: "The internet is disconnected on your device."
                    });
					return;
				}
		};

		$http.get("http://apis.pluralcode.com.ng/public/home/register_student?fullname=" + $scope.details.name + "&password=" + $scope.details.password + "&email=" + $scope.details.email + "&phone=" + $scope.details.phone_number)
			.success (function (data) {
			if (data.error_code == 241) {
				$ionicLoading.hide();
				
				var alertPopup = $ionicPopup.alert({
					title: 'Error',
					template: data.message
				});
				return;
				
			};
			if (data.error_code == 240) {
				$ionicLoading.hide();
				Auth.setData(data.student_detail.email, data.student_detail.fullname, data.student_detail.phone, data.student_detail.balance, $scope.details.password);
				Auth.setUser("usersession");
				$state.go("tabs.home");
				console.log($scope.details.name);
				console.log($scope.details.email);
				console.log($scope.details.phone_number);
				console.log($scope.details.password);
				
				
			};
		})
			.error( function (err) {
			
		});

		
		
	};
});