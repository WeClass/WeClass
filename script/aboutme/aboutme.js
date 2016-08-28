apiready = function() {
    $api.append($api.dom('body'),'<div class="aui-loading"><div class="aui-loading-1"></div><div class="aui-loading-2"></div></div>');
	aboutmegetData();
	aboutmesetCustomRefreshHeader();
	$api.fixStatusBar($api.dom('.header'));
	api.parseTapmode();
	
};
//得到下面版本的数据
function aboutmegetData() {
	var getActivityUrl = '/aboutme';//得到路径数据库名
	//利用ajax请求访问数据库信息
	ajaxRequest(getActivityUrl, 'GET', '', function(ret, err) {
		if (ret) {
			var tpl = $api.byId('act-template').text;//得到要填充的数据的模板
			var content = $api.byId('act-content');//得到要填充的数据的div
			var tempFn = doT.template(tpl);//把模板template，作为参数传入doT.template()
			content.innerHTML = tempFn(ret);//在html中填充数据
			api.parseTapmode();
		} else {
			api.toast({
				msg : "无法连接到服务器，请检查你的网络设置或稍后再试。",
				location : 'top'
			})
		}
		hide();
	})
}

//隐藏
function hide(){
        $api.remove($api.dom('.aui-loading'));
    }


 //下拉刷新
function aboutmesetCustomRefreshHeader(){
    api.setCustomRefreshHeaderInfo({
            bgColor : '#f0f0f0',
            image : {
                pull: 
                [
                	'widget://image/meituan/pull_end_image_frame_01.png',
                	'widget://image/meituan/pull_end_image_frame_02.png',
                	'widget://image/meituan/pull_end_image_frame_03.png',
                	'widget://image/meituan/pull_end_image_frame_04.png',
                	'widget://image/meituan/pull_end_image_frame_05.png'
            	],
                load : [
                	'widget://image/meituan/refreshing_image_frame_01.png',
                	'widget://image/meituan/refreshing_image_frame_02.png',
                	'widget://image/meituan/refreshing_image_frame_03.png',
                	'widget://image/meituan/refreshing_image_frame_04.png',
                	'widget://image/meituan/refreshing_image_frame_05.png',
                	'widget://image/meituan/refreshing_image_frame_06.png'
            	]
            }
        },function() {
           //下拉刷新被触发，自动进入加载状态，使用 api.refreshHeaderLoadDone() 手动结束加载中状态
           setTimeout(function(){
		   aboutmegetData();
		   api.refreshHeaderLoadDone();
 },3000)
});
} 









