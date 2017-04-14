
var smsApp = angular.module('smsApp', ['ngRoute', 'ngResource', 'ngAnimate']);

smsApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/dashboard.html',
            controller: 'dashboardController as dashboardCtrl'
        })
        .when('/messages/:keyword', {
            templateUrl: 'views/messages.html',
            controller: 'messagesController as vm'
        })
        .otherwise('/');

    $locationProvider.hashPrefix('');    
}]);

smsApp.factory('pagerService', function() {
    // service definition
    var service = {};

    service.GetPager = GetPager;

    return service;

    // service implementation
    function GetPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 10;

        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        var pages = _.range(startPage, endPage + 1);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
});

smsApp.controller('dashboardController', ['dataService', function(dataService) {
    var vm = this;

    dataService.getData().then(function(data) {
        vm.keywords = data.keywords;
        console.log(vm.keywords);
    });

}]);

smsApp.controller('messagesController', ['$scope', '$routeParams', '$timeout', 'dataService', 'pagerService', function($scope, $routeParams, $timeout, dataService, pagerService) {
    let vm = this;

    vm.keyword = $routeParams.keyword;

    vm.messages = [];

    vm.reload = function() {
        dataService.getMessages($routeParams.keyword).then(function(data) {
            vm.messages = data;
            //console.log(vm.messages);
        });

        $timeout(function() {
            vm.reload();
        }, 20000)
    };

    vm.reload();

    vm.pager = {};

    vm.setPage = setPage;

    initController();

    function initController() {
        // initialize to page 1
        vm.setPage(1);
    }

    function setPage(page) {
        if (page < 1 || page > vm.pager.totalPages) {
            return;
        }

        // get pager object from service
        vm.pager = pagerService.GetPager(vm.messages.length, page, 1);

        // get current page of items
        vm.items = vm.messages.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
    }

}]);

smsApp.controller('navController', [function() {
    let vm = this;

}]);

smsApp.factory('dataService', ['$http', function($http) {
    
    let keywords = [];

    var getData = function() {
        return $http.get('api/keywords')
        .then(function(response) {
            keywords = response.data;
            return keywords;
        });
    }

    let getMessages = function(keyword) {
        return $http.get('api/message/' + keyword)
        .then(function(response) {
            return response.data;
        })
    }

    return {
        getData: getData,
        getMessages: getMessages
    }
    
}]);    
