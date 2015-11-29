var Home = {
    sortData: function(){
        var me = this;
        var hotCakes = [];
        var creamCakes = [];
        var mousseCakes = [];

        $.each(F.context('cakes'), function(index, item){
            var id = item.id;
            var item = item.attributes;

            item.id = id;

            if(item.hot){
                hotCakes.push(item);
            }

            if(item.category.id == 1){
                creamCakes.push(item);
            }

            if(item.category.id == 2){
                mousseCakes.push(item);
            }
        });

        me.hotCakes = hotCakes;
        me.creamCakes = creamCakes;
        me.mousseCakes = mousseCakes;

        me.render();
    },
    init: function(){
        var me = this;

        /*$.get('test/cake.json', function(data){
            F.context('cakes', data.results);

            me.sortData();
            me.render();
            me.resetStyle();
        });*/

        var Cake = AV.Object.extend('Cake');
        var query = new AV.Query(Cake);
        query.find({
            success: function(results) {
                F.context('cakes', results);
                
                me.sortData();
            },
            error: function(error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
    },
    render: function(){
        var me = this;

        var hotTpl = bt('tpl-cake', {
            list: me.hotCakes
        });
        $('#hot-cakes').html(hotTpl);

        var creamTpl = bt('tpl-cake', {
            list: me.creamCakes
        });
        $('#cream-cakes').html(creamTpl);

        var mousseTpl = bt('tpl-cake', {
            list: me.mousseCakes
        });
        $('#mousse-cakes').html(mousseTpl);

        me.resetStyle();
    },
    resetStyle: function(){
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
    }
}

return ['$scope', function($scope) {
    // 渲染模板
    Home.init();

    // 回到顶部
    $('#back-to-top').click(function(){
        $scope.goTo('wgt-header');
    });
}];