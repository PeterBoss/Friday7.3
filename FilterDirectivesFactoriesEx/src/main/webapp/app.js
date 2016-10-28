var app = angular.module('myApp', []);

app.controller('MyController', [function () {
        var self = this;
        self.persons = [
            {name: 'Hans', gender: 'male', age: 8}, {name: 'Grethe', gender: 'female', age: 7},
            {name: 'Frederik', gender: 'male', age: 61}, {name: 'Hassan', gender: 'male', age: 13},
            {name: 'Karen', gender: 'female', age: 31}];
    }]);

app.controller("ChessCtrl", function ($scope) {
    $scope.board = ["wr", "wkn", "wb", "wq", "wk", "wb", "wkn", "wr"];
});

app.filter('SchoolAge', function () {

    return function (person) {
        if (person.age >= 6 && person.age <= 15) {
            return person;
        }
    };
});

app.filter("Chess", function ($sce) {

    var codes = {
        "wr": "&#9814;",
        "wkn": "&#9816;",
        "wb": "&#9815;",
        "wq": "&#9813;",
        "wk": "&#9812;"
    };

    return function (input) {
        return $sce.trustAsHtml(codes[input]);
    };

});

app.controller("DirectiveController", ['$scope', function ($scope) {
        $scope.user = {
            companyName: "Coolest Company on Earth",
            companyUrl: "http://www.cool.cooler.com",
            created: new Date()
        };
    }]);
app.directive("formatCompany", function () {
    return {
        templateUrl: "company.html"
    };
});

