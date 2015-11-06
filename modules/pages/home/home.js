// require('common/widget/widget');

module.exports = {
    url: '/',
    template: __inline('./home.html'),
    controller : function($scope, $injector) {
        //支持异步加载controller
        require.async('/modules/pages/home/home.async.js', function(ctrl) {
            $injector.invoke(ctrl, this, {'$scope': $scope});
        });
    }
};