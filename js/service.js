var app = angular.module("myApp.service",[])
.factory('Students',function(){
		var students = [{"id":1,"name":"Tone","age":20,"gender":"Male","course":"Math"},
					{"id":2,"name":"Jack","age":19,"gender":"Male","course":"English"},
					{"id":3,"name":"Mary","age":20,"gender":"Female","course":"Physical"},
					{"id":4,"name":"Nick","age":21,"gender":"Male","course":"Chemistry"},
					{"id":5,"name":"Susan","age":18,"gender":"Female","course":"Chinese"},
					{"id":6,"name":"Pol","age":22,"gender":"Male","course":"Math"}];
	
	return{
		all:function(){
			return students;
		},
		deleteStudent:function(student){
			students.splice(students.indexOf(student),1);
		},
		createStudent:function(student){
			students.push(student);
		},
		get:function(id){
			for (var i=0;i<students.length;i++) {
				if(students[i].id == parseInt(id)){
					return students[i];
				}
			}
			return null;
		}
	}

});