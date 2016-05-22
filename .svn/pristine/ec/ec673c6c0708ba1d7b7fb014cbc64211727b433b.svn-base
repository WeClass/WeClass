apiready = function() {
	$api.append($api.dom('body'), '<div class="aui-loading"><div class="aui-loading-1"></div><div class="aui-loading-2"></div></div>');
	$api.fixStatusBar($api.dom('.header'));
	getLectureData();
	//下拉刷新
	setRefreshHeader();
	api.parseTapmode();
	api.addEventListener({
		name : 'keyback'
	}, function(ret, err) {
		api.closeWidget();
	});
}
//得到讲义的数据
function getLectureData() {
	var getActivityUrl = '/lecture';
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
			});
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
		getLectureData();
		
		api.refreshHeaderLoadDone();
	});

}
//https://d.apicloud.com/mcm/api/lecturedetail?filter=571368f9f14d017c08e2f12e
//得到数据则关闭加载的进度
function hide(){
        $api.remove($api.dom('.aui-loading'));
    }
//得到讲义每一项的内容
function getLectureDetailData(did) {
    alert(did);
    //得到点击的id
    var dataId=did;
    //过滤id,得到点击的id
	var getActivityById = '/lecturedetail?filter=';
			var urlParam = {
				where : {
					lecture : dataId  
				}
			};
	
	//得到路径数据库名	
	//利用ajax请求访问数据库信息
	ajaxRequest(getActivityById+ JSON.stringify(urlParam), 'GET', '', function(ret, err) {
		if (ret) {
			var tpl = $api.byId('act-templated').text;
			//得到要填充的数据的模板
			var content = $api.byId('act-contentd');
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
			});
		}
		hide();
	})
}



