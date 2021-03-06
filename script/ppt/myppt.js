apiready = function() {
	$api.append($api.dom('body'), '<div class="aui-loading"><div class="aui-loading-1"></div><div class="aui-loading-2"></div></div>');
	getPPTData();
	pptsetCustomRefreshHeader();
	$api.fixStatusBar($api.dom('.header'));
	api.parseTapmode();
};
//得到下面讲师的数据
function getPPTData() {
     
	var getActivityUrl = '/ppt';
	//得到路径数据库名
	//利用ajax请求访问数据库信息
	ajaxRequest(getActivityUrl, 'GET', '', function(ret, err) {
		if (ret) {
			var tpl = $api.byId('act-template').text;
			//得到要填充的数据的模板
			var content = $api.byId('act-content');
			//得到要填充的数据的div
			var tempFn = doT.template(tpl);
			//把模板template，作为参数传入doT.template()
			content.innerHTML = tempFn(ret);
			//在html中填充数据
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

//刷新界面


//打开每一个视频
function openpptDetail(did, url) {
    //下载PPT
    downppt(url)
}


//下载ppt
function downppt(url) {
	//alert(url);
	//开始一个下载
	var manager = api.require('downloadManager');
	manager.enqueue({
		url : url, //资源地址，不能为空
		savePath : 'fs://ppt' + url, //存储路径，为空时使用自动创建的路径
		cache : true, //是否使用缓存
		allowResume : true, //是否开启断点续传，需要服务器支持
		uncompress : false,
		mimeType : '/ppt',
		title : 'ppt', //展示在managerView列表中的文件标题
		networkTypes : 'all'//允许自动下载的网络环境，参考网络环境常量
	}, function(ret, err) {
		if (ret.id) {
			docReader(url);
		} else {
			alert("正在下载，请耐心等待！");
		}
	});

}

//打开ppt
function docReader(url) {
	var obj = api.require('docReader');
	obj.open({
		path : 'fs://ppt' + url,
	}, function(ret, err) {
		if (ret.status) {
		  alert("正在完成！");
		} else {
			alert("正在下载，请耐心等待！");
		}
	});
}

//得到数据则关闭加载的进度
function hide() {
	$api.remove($api.dom('.aui-loading'));
}

function downWin(did,url) {

	var manager = api.require('downloadManager');
	manager.openManagerView({
		title : '下载'
		
	}, function(ret) {
		var id = ret.id;
		var mimeType = ret.mimeType;
		var savePath = ret.savePath;
		manager.openDownloadedFile({
			id : did
		}, function(ret, err) {
			if (ret.status) {
             alert("下载完成");
			 downppt(url); 
			} else {
		   //由id查询ppt然后下载
	        
			}
		});
	});
}

 
 //下拉刷新
function pptsetCustomRefreshHeader(){
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
           //$api.append($api.dom('body'), '<div class="aui-loading"><div class="aui-loading-1"></div><div class="aui-loading-2"></div></div>');
		   getPPTData();
		   api.refreshHeaderLoadDone();
 },3000)

});
} 
 





