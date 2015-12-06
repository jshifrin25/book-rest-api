/* global angular */

(function () {
    'use strict';
    var app = angular.module('bookshop', []);
    app.controller('BookController', function ($scope, $http) {
        $http.get('/book').then(function (books) {
            $scope.books = books.data;
        });
    });
}());