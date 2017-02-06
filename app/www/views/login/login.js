angular.module("App")
.controller("LoginController", function ($scope, $state, $ionicLoading, $ionicPopup ,$http, Auth) {
	$scope.details = [
			{email: ""},
			{password: ""}
		];
	
	$scope.login = function () {
		$ionicLoading.show({
			template: 'Logging in...',
		});
		if ($scope.details.email == undefined) {
			$ionicLoading.hide();
			$ionicPopup.alert({
				title: "Error",
				template: "Enter valid email!"
			});
			return;
		};
		if ($scope.details.password == undefined) {
			$ionicLoading.hide();
			$ionicPopup.alert({
				title: "Error",
				template: "Enter password!"
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
		$http.get("http://apis.pluralcode.com.ng/public/student/profile?email=" + $scope.details.email + "&password=" + $scope.details.password)
			.success(function (data) {
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
				Auth.setData(data.email, data.fullname, data.phone, data.balance, $scope.details.password);
				Auth.setUser("usersession");
				$state.go("tabs.home",{},{reload: true});
				console.log(Auth.getEmail());
				console.log(Auth.getPhone());
				console.log(Auth.getBalance());
				console.log($scope.details.password);
				
				
			};
		})
			.error(function (err) {
		});
	}
	$scope.signup = function () {
		$state.go("signup1");
	};
})