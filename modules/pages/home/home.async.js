
return ['$scope', function($scope) {
    // 重置样式
    $('.cakes').each(function(index, item){
        var img = $(item).find('img');
        var imgWidth = img.width();
        var detail = $(item).find('.detail');
        var content = detail.find('.content');

        img.height(imgWidth);
        detail.css({
            padding: (imgWidth - content.height()) / 2 + 'px 0' 
        });
    });

    // 回到顶部
    $('#back-to-top').click(function(){
        $scope.goTo('wgt-header');
    });

    // 初始化数据
    AV.initialize('QP6zOaCyxLpdNmVpllkwCJ5R', 'tDmvwwEF4yuVQDqPkYETzfet');

    var Cake = AV.Object.extend('Cake');
    var query = new AV.Query(Cake);
    query.find({
        success: function(results) {
            console.log(results);
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}];