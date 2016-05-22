function qqlogin() {
	var obj = api.require('qq');
	//判断当前设备是否安装了 QQ 客户端
	obj.installed(function(ret, err) {
		if (ret.status) {
			//已经安装则登录
			obj.login(function(ret, err) {
				if (ret) {
					api.showProgress({
						style : 'default',
						animationType : 'fade',
						title : '登录中...',
						text : '请稍后...',
						modal : false
					});
					//验证成功
					var openId = ret.openId;
					var accessToken = ret.accessToken;
					//获取用户基本信息
					obj.getUserInfo(function(ret, err) {
						api.hideProgress();
						//方法1
						alert(ret.info.nickname);
						// 得到qq用户名若想引用ret的值，直接ret.info是它的信息对象，可以继承引用。
						var url = ret.info.figureurl_1;
						downpic(url);
						console.log(url);
						alert(url); 
					});
				}
			});

		} else {
			api.alert({
				msg : "请您先安装QQ，才能登录。"
			});
		}
	});
}

//下载图片
//下载ppt
function downpic(url) {
	//alert(url);
	//开始一个下载
	var manager = api.require('downloadManager');
	manager.enqueue({
		url : url, //资源地址，不能为空
		savePath : 'fs://' + url, //存储路径，为空时使用自动创建的路径
		cache : true, //是否使用缓存
		allowResume : true, //是否开启断点续传，需要服务器支持
		uncompress : false,
		mimeType : '/png',
		title : 'png', //展示在managerView列表中的文件标题
		networkTypes : 'all'//允许自动下载的网络环境，参考网络环境常量
	}, function(ret, err) {
		if (ret.id) {
			//获取成功后的操作
			api.openWin({
				name : 'index',
				url : 'index.html',  
				opaque : true,
				vScrollBarEnabled : false
			});
		} else {
			alert("正在下载，请耐心等待！");
		}
	});
}

