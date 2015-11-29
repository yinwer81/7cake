angular.module('7Cake', ['ui.router'/*, 'ngCookies'*/]);

require('router');

/**
 * Master Controller
 */

angular.module('7Cake').controller('MasterCtrl', function ($scope) {
    AV.initialize('QP6zOaCyxLpdNmVpllkwCJ5R', 'tDmvwwEF4yuVQDqPkYETzfet');
    /**
     * Sidebar Toggle & Cookie Control
     */
    /*var mobileView = 992;

    $scope.getWidth = function () {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function (newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = !$cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function () {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function () {
        $scope.$apply();
    };*/
});