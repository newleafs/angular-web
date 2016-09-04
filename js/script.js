var app = angular.module("myApp",["ngRoute","myApp.controller","myApp.service"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/home",{
		templateUrl:'template/home.html',
		controller:"homeCtrl"
	})
	.when("/student",{
		templateUrl:'template/student.html',
		controller:"studentCtrl"
	})
	.when("/student/:id",{
		templateUrl:'template/studentDetail.html',
		controller:"studentDetailCtrl"
	})
	.when("/course",{
		templateUrl:'template/course.html',
		controller:"courseCtrl"
	})
	.otherwise({
		templateUrl:'template/home.html'
	});
});



