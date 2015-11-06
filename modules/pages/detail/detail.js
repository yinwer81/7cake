// require('common/widget/widget');

module.exports = {
    url: '/detail',
    template: __inline('./detail.html'),
    controller : function($scope, $injector) {
        //支持异步加载controller
        require.async('/modules/pages/detail/detail.async.js', function(ctrl) {
            $injector.invoke(ctrl, this, {'$scope': $scope});
        });
    }
};