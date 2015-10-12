/**
 * Created by ravib on 11/10/15.
 */
var app = angular.module('myApp', []);

app.run(function($rootScope) {
    $rootScope.name = "Ravi Byakod";
});


app.controller( "MyController", function($scope){
    $scope.person = {
        name : " Ravi Byakod from controller",
        address : "Villa 376 Adarsh Palm Retreat, Bellandur, Bangalore",
        phone : " +91 9740100664"
    };

    $scope.person.greeted = false ;
});

app.controller("MyChildController", function($scope){
    $scope.sayHello = function() {
        $scope.person.greeted = true;
    }
});

app.controller("CountController", function($scope){
    $scope.currentCount = 0;

    $scope.add = function(amount) {
        $scope.currentCount += amount;
    }
    $scope.subtract = function(amount) {
        $scope.currentCount -= amount;
    }
});

app.controller("CountAmountController", function($scope){
    $scope.currentCount = 0;
    $scope.amount = 1;
    $scope.add = function(amount) {
        $scope.currentCount += parseInt(amount, 10);
    }
    $scope.subtract = function(amount) {
        $scope.currentCount -= parseInt(amount);
    }
});



