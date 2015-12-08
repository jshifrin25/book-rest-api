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
        .controller('BookFormController', ['$scope', '$http', '$timeout',
                 function ($scope, $http, $timeout) {
                $scope.successMessage = '',
                    $scope.data = {
                        title: 'Book Title',
                        author: 'Book Author',
                        pages: 0,
                        published: new Date(2013, 4, 18),
                        category: 'Book Category',
                        summary: ''
                    },
                    $scope.addBook = function () {
                        $http.post('/book', $scope.data).then(function (response) {
                            $scope.successMessage = 'Your Book was Successfully Added';
                            $scope.data = {
                                title: '',
                                author: '',
                                pages: 0,
                                published: new Date(2013, 4, 18),
                                category: '',
                                summary: ''
                            };
                            $timeout(function () {
                                $scope.successMessage = '';
                            }, 3000);
                        }, function (error) {
                            console.error(error);
                        });
                    };
    }]);
}());