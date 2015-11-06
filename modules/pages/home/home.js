// require('common/widget/widget');

module.exports = {
    url: '/',
    template: __inline('./home.html'),
    controller : function($scope, $injector) {
        //支持异步加载controller
        require.async('/modules/pages/home/home.async.js', function(ctrl) {
            $injector.invoke(ctrl, this, {'$scope': $scope});
        });

        AV.initialize('QP6zOaCyxLpdNmVpllkwCJ5R', 'tDmvwwEF4yuVQDqPkYETzfet');

        var TestObject = AV.Object.extend('TestObject');
        var testObject = new TestObject();
        testObject.save({
            foo: 'bar'
        }, {
            success: function(object) {
                alert('LeanCloud works!');
            }
        });

        /*$http({
            url:'https://api.parse.com/1/classes/travelMap',
            method: 'GET',
            headers: {
                'X-Parse-Application-Id': 'VYEnLxksaVgpGipcdGeHGyqOqK30Bk7JKE80EWuI',
                'X-Parse-REST-API-Key': 'BhWq53veMuYTfhkxhz3NmlscdRtC2ZvtZYfzSiXr'
            }

        }).success( function(response) {
           console.log(response)
        });*/
    }
};