apiready = function() {
	getBanner();
	getData();
	setCustomRefreshHeader();
	$api.fixStatusBar($api.dom('.header'));
	
};

//得到上面的三张图片
function getBanner() {
	api.showProgress({
		title : '加载中...',
		modal : false
	});
	var getActivityUrl = '/swipepic';//定义路径
	//利用ajax请求得到数据 doT.js主要的用途就是，在写好的模板上，放进数据，生成含有数据的html代码。
	ajaxRequest(getActivityUrl, 'GET', '', function(ret, err) {
		if (ret) {
			var tpl = $api.byId('banner-template').text;//得到要填充的数据的模板id
			var content = $api.byId('banner-content');//得到填充的HTML
			var tempFn = doT.template(tpl);//把模板template，作为参数传入doT.template() 方法
			var result = [];//定义一个数组
			for (var i = 0, len = 3; i < len; i++) {
				result.push(ret[i]);//把每张图片放入数组中
				/*ret[i].onclick = fn(){
				  alert(i);
				}*/
			}
			content.innerHTML = tempFn(result);//在html中填充图片
			initSlide();//初始化
		} else {
			alert( JSON.stringify( err ) );
		}
		api.hideProgress();
	})
}
    //设置轮番显示的样式利用插件swipe.js是一个轻量级的移动滑动组件，支持触摸移动，支持响应式页面。
function initSlide() {
	var slide = $api.byId('slide');//得到div
	var pointer = $api.domAll('#pointer a');//得到所有的连接
	window.mySlide = Swipe(slide, {
		auto : 5000,//自动滑动 (time in milliseconds between slides)5000毫秒
		continuous : true,//是否可以循环播放
		disableScroll : true,//停止触摸滑动
		stopPropagation : true,//停止事件传播
		callback : function(index, element) {
			var actPoint = $api.dom('#pointer a.active');
			$api.removeCls(actPoint, 'active');
			$api.addCls(pointer[index], 'active');
		},//回调函数，可以获取到滑动中图片的索引.
		transitionEnd : function(index, element) {
		//在最后滑动转化是执行.
		}
	});
}

//得到下面讲师的数据
function getData() {
	api.showProgress({
		title : '加载中...',
		modal : false
	});
	
	
	var getActivityUrl = '/homepage';//得到路径数据库名
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
		api.hideProgress();
	})
}
//侧滑监听
function sliding() {
	api.openSlidPane({
		type : 'left'
	});
	
}
//下拉刷新
function setCustomRefreshHeader(){
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
           getBanner();
		   getData();
		   api.refreshHeaderLoadDone();
 },3000)

});

} 
 
