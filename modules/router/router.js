'use strict';

var home = require('pages/home/home');
var detail = require('pages/detail/detail');

/**
 * Route configuration for the RDash module.
 */
angular.module('7Cake').config(function ($stateProvider, $urlRouterProvider) {

    // For unmatched routes
    $urlRouterProvider.otherwise('/');

    // Application routes
    $stateProvider
        .state('/', home)
        .state('detail', detail);
});