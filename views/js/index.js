/* global angular */

(function () {
    'use strict';
    var app = angular.module('bookshop', []);
    app.controller('BookController', function ($scope, $http) {
        $http.get('/book').then(function (books) {
            $scope.books = books.data;
        });
    });
    angular.module('bookform', [])
        .controller('BookFormController', ['$scope', '$http',
                 function ($scope, $http) {
                $scope.successMessage = '',
                    $scope.data = {
                        title: 'Book Title',
                        author: 'Book Author',
                        pages: 0,
                        published: 'yyyy-dd-MM',
                        category: 'Book Category',
                        summary: ''
                    },
                    $scope.addBook = function () {
                        $http.post('/book', $scope.data).then(function (response) {
                            $scope.successMessage = 'Your Book was Successfully Added';
                            $scope.data = {
                                title: 'Book Title',
                                author: 'Book Author',
                                pages: 0,
                                published: 'yyyy-dd-MM',
                                category: 'Book Category',
                                summary: ''
                            };
                            console.log('Successful');
                        }, function (error) {
                            console.error(error);
                        });
                    };
    }]);
}());