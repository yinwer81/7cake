// require('common/widget/widget');

module.exports = {
    url: '/detail',
    template: __inline('./detail.html'),
    controller : function($scope, $injector, $location) {
        // console.log('id: ' + $location.search().id);
        F.context('detail', {
            id: $location.search().id
        });

        //支持异步加载controller
        require.async('/modules/pages/detail/detail.async.js', function(ctrl) {
            $injector.invoke(ctrl, this, {
                '$scope': $scope
            });
        });
    }
};