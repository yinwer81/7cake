
return ['$scope', function($scope) {
    var backToHome = function(){
        location.href = '/#/';
    }

    if(!F.context('detail') || !F.context('detail')['id']){
        backToHome();
    }

    // 初始化数据
    var Cake = AV.Object.extend('Cake');
    var query = new AV.Query(Cake);
    query.equalTo('objectId', F.context('detail')['id']);
    query.find({
        success: function(results) {
            if(!results.length){
                backToHome();
                return;
            }

            var data = results[0].attributes;
            var tpl = bt('tpl-detail', data);
            $('#main').html(tpl);
        },
        error: function(error) {
            backToHome();
        }
    });

    // 本地测试
    /*$.get('/test/cake.json', function(data){
        results = data.results;

        var data = results[0];
        var tpl = bt('tpl-detail', data);
        $('#main').html(tpl);
    });*/

    /*$('.page-detail').on('click', '#detail-submit', function(e){
        e.preventDefault();

        alert('在线订购入口暂未开通，请致电')
    }).on('click', '.cake-item', function(){
        $(this).addClass('active').siblings().removeClass('active');

        if($('#detail-submit').hasClass('disabled')){
            $('#detail-submit').removeClass('disabled');
        }
    })*/;
}];