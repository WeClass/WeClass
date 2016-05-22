function openLectureItem(did,url){
  //alert(did);
  downlecture(url);
}
//下载ppt
function downlecture(url) {
	//alert(url);
	//开始一个下载
	var manager = api.require('downloadManager');
	manager.enqueue({
		url : url, //资源地址，不能为空
		savePath : 'fs://' + url, //存储路径，为空时使用自动创建的路径
		cache : true, //是否使用缓存
		allowResume : true, //是否开启断点续传，需要服务器支持
		uncompress : false,
		mimeType : '/docx',
		title : 'docx', //展示在managerView列表中的文件标题
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
		path : 'fs://' + url,
	}, function(ret, err) {
		if (ret.status) {
		  alert("正在完成！");
		} else {
			alert("正在下载，请耐心等待！");
		}
	});
}
/////////////////////////////////////////
function getvideoData() {

	

}



















