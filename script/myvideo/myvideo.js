apiready = function() {
    $api.append($api.dom('body'),'<div class="aui-loading"><div class="aui-loading-1"></div><div class="aui-loading-2"></div></div>');
	getData();
	setRefreshHeader();
	$api.fixStatusBar($api.dom('.header'));
	api.parseTapmode();
	
};
//得到下面讲师的数据
function getData() {
	var getActivityUrl = '/video';//得到路径数据库名
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

//刷新界面
function setRefreshHeader() {

	api.setRefreshHeaderInfo({
		visible : true,
		bgColor : '#f2f2f2',
		textColor : '#4d4d4d',
		textDown : '下拉刷新...',
		textUp : '松开立即刷新...',
		showTime : true
	}, function(ret, err) {
		getData();
		api.refreshHeaderLoadDone();
	});

}

//打开每一个视频
function  openvideoDetail(did){
  //注意把id传递过去，打开每个视频
  api.openWin({
	  name: 'videoDetail',
	  url: 'videoDetail.html',
	  pageParam:{dataId : did}
	  
  });

}

 function hide(){
        $api.remove($api.dom('.aui-loading'));
    }












