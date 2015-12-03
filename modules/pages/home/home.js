// require('common/widget/widget');

module.exports = {
    url: '/',
    template: __inline('./home.html'),
    controller : function($scope, $injector, $anchorScroll, $location) {
        $scope.goTo = function (id) {
            $location.hash(id);
            $anchorScroll();
        }

        //支持异步加载controller
        require.async('/modules/pages/home/home.async.js', function(ctrl) {
            $injector.invoke(ctrl, this, {
                '$scope': $scope,
                '$anchorScroll': $anchorScroll,
                '$location': $location
            });
        });
    }
};
