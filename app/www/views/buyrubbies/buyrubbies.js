
angular.module("App")
.controller("BuyRubbiesController", function ($scope, $state, Auth, $ionicLoading, $http ) {
	$scope.email = Auth.getEmail();
	$scope.password = Auth.getPassword();
	$scope.balance = Auth.getBalance();
	
	$scope.details = [
		{amount: ""}
	];
	var am = parseInt($scope.amount) * 1000;
	
	$http.get("http://apis.pluralcode.com.ng/public/student/payment/paystack_get_reference?email=" + $scope.email + "&password=" + $scope.password)
	.success ( function (data) {
		$scope.ref = data.reference_id
	})
	.error (function (err) {
		$ionicLoading.hide();
				
				var alertPopup = $ionicPopup.alert({
					title: 'Error',
					template: "No Internet Connection"
				});
				return;
	});
	$scope.buy_airtime = function () {
	};
	$scope.buy_creditcard = function (){
		
		
	  var handler = PaystackPop.setup({
      key: 'pk_test_de8cc0bba40a62a8bcc0aaace50353b3bbbb81be',
      email: $scope.email,
      amount: parseFloat($scope.details.amount).toFixed(2) * 1000,
      ref: $scope.ref,
     
      callback: function(response){
		  $http.get("http://apis.pluralcode.com.ng/public/student/payment/paystack?" + $scope.email + "&password=" + $scope.password + "&reference_id=" + $scope.ref)
			  .success ( function (data) {
			  console.log(data.message);
	})
	.error (function (err) {
		
	});
         
		 // $state.go("tabs.creditpaysuccess");
      },
      onClose: function(){
          
      }
    });
    handler.openIframe();
  }
})

