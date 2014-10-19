'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuizcontrollerCtrl
 * @description
 * # QuizcontrollerCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
	.filter('shuffle', function() {
		return function(arr) {
			var newArr = [];
			for(var i=arr.length, j; i; j=Math.floor(Math.random()*i), i--) {
				newArr.push(arr[j]);
			}
			return newArr;
		};
	})
  .controller('QuizCtrl', function ($scope, $interval) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.time=60;
	$interval(function() {
		$scope.time--;
		}, 1000, 60);
    $scope.quiz = [
	    { 
	      'q': 'Who is the best ping pong player at FSA?', 
	      'options': [{ 'value': 'Mike'} , { 'value': 'Eddie'} , {'value' : 'Nimit'} , { 'value': 'Patrick'}],
	      'answer': 'Nimit', 
	      'difficulty': 3
	    },
	    { 'q': 'Which robot name was chanted during Lego Mindstorms?', 
	      'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}], 
	      'answer':'noHope.js', 
	      'difficulty': 1
	    },
	    { 
	      'q': 'Out of the following frontend frameworks, which framework is most rails-like?', 
	      'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value' : 'Backbone.js'} , { 'value': 'Meteor.js'}], 
	      'answer':'Ember.js', 
	      'difficulty': 4
	    },
	    { 
	      'q': 'Which project used a local data store?', 
	      'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value' : 'WikiWalker'} , { 'value': 'WikiStack'}], 
	      'answer':'Twitter.js', 
	      'difficulty': 2
	    }
	];
	$scope.check = function(question, answer){
		var i=0;
		while(this.quiz[i].q!==question) {
			i++;
		}
		if(this.quiz[i].answer===answer) {
			$scope.score++;
		}

		$scope.guess=answer;
	};
	$scope.score = 0;
	$scope.newQuestion = function(question, answers, difficulty) {
		var ansArr = answers.split(' ');
		var new_question = {
			'q':question,
			'options': ansArr.map(function(item) { return {'value': item};}),
			'answer': ansArr[0],
			'difficulty': difficulty
		};
		$scope.quiz.push(new_question);
	};
});
