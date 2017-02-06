
angular.module("App")
.controller("CodeController", function ($scope, $state) {
	$scope.data = {
    availableOptions: [
      {id: 'htmlmixed', name: 'HTML/CSS'},
      {id: 'python', name: 'Python'},
      {id: 'javascript', name: 'JavaScript'},
      {id: 'application/x-httpd-php', name: 'PHP'},
      {id: 'text/x-csrc', name: 'C'},
      {id: 'text/x-c++src', name: 'C++'},
      {id: 'text/x-csharp', name: 'C#'},
      {id: 'text/x-java', name: 'Java'},
      {id: 'text/x-ruby', name: 'Ruby'},
      {id: 'text/x-perl', name: 'Perl'},
      {id: 'text/x-mysql', name: 'SQL'},
      {id: 'text/x-swift', name: 'Swift'}
    ],
    selectedOption: {id: 'htmlmixed', name: 'HTML/CSS'}, //This sets the default value of the select in the ui
		
	
    };
	
	function editor (lang) {
			var cm = CodeMirror.fromTextArea(document.getElementById("code"), {
        				mode: {name: lang,
               			version: 3,
               			singleLineStringErrors: false},
        				lineNumbers: true,
        				indentUnit: 4,
        				matchBrackets: true,
    				});
			return cm;
	};
	var cm = editor("python");
	
	$scope.savework = function() {
		//$state.go("tabs.savecode");
	};
	
	$scope.$watch('data.selectedOption', function () {
		cm.setOption("mode", $scope.data.selectedOption.id);
	});
	
	
	
})