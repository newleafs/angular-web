var app = angular.module("myApp.controller",[])
.controller("homeCtrl",function($scope){})
.controller("studentCtrl",function($scope,Students){
	$scope.students = Students.all();
	$scope.startEdit = function(student){
		$scope.editStudent = student;
	}
	$scope.deleteStudent = function(student){
		Students.deleteStudent(student);
	}
	$scope.createStudent=function(student){
		Students.createStudent(student);
		$scope.editStudent = null;
	}
	$scope.cancelEdit=function(){
		$scope.editStudent = null;
	}
})
.controller("studentDetailCtrl",function($scope,$routeParams,Students){
	$scope.studentDetails = Students.get($routeParams.id);
})
.controller("courseCtrl",function($scope){
	var courses = ["Math","English","Chinese","Chemistry","Physical","Biology"];
	$scope.courses = courses;
});