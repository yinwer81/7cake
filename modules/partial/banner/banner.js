var Banner = {
    init: function(){
        var bannerObject = AV.Object.extend('Banner');
        var query = new AV.Query(bannerObject);
        query.find({
            success: function(results) {
                var list = [];

                $.each(results, function(index, item){
                    var data = item.attributes;

                    list.push({
                        content: [
                            '<a class="banner-item" href="' + data.url + '">',
                            '<img src="' + data.img._url + '"/>',
                            '</a>'
                        ].join('')
                    });
                });

                var options = {
                    data: list,
                    dom: document.getElementById('wgt-banner'),
                    isLooping: true,
                    isDebug: false,
                    isAutoplay: 1,
                    animateTime: 800,
                    plugins: [['dot', {
                        locate: document.getElementById('wgt-banner')
                    }]]
                };
                
                new iSlider(options);
                /*F.context('cakes', results);
                
                me.sortData();*/
            },
            error: function(error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });

        /*var list = [
            {
                content: [
                    '<a class="banner-item" href="http://jingyan.baidu.com/">',
                    '<img src="http://himg.bdimg.com/sys/portrait/item/e0e2646a77616e65726f6bb00c.jpg"/>',
                    '</a>'
                ].join('')
            },
            {
                content: [
                    '<a class="banner-item" href="http://jingyan.baidu.com/">',
                    '<img src="http://himg.bdimg.com/sys/portrait/item/e0e2646a77616e65726f6bb00c.jpg"/>',
                    '</a>'
                ].join('')
            }
        ];*/
    }
}

module.exports = Banner;
