function qqlogin() {
    oInputBlur();
	var obj = api.require('qq');
	//判断当前设备是否安装了 QQ 客户端
	obj.installed(function(ret, err) {
		if (ret.status) {
			//已经安装则登录
			obj.login(function(ret, err) {
			   //判断用户如果点击返回键
				if (ret.openId) {
				    showPro();         
				    getUserInformation(obj,ret);
				}
			});
		}else{
			api.alert({
				msg : "请您先安装QQ，才能登录。"
			});
		}
	});
}
//
function oInputBlur(){
    var oPhoneDiv =$api.byId("phoneInput");
    oPhoneDiv.style.borderBottom="1px solid #d4d4d4";
}
//得到用户信息
function getUserInformation(obj,ret){
                    var openId = ret.openId;	
					var accessToken = ret.accessToken;
					//获取用户基本信息
					obj.getUserInfo(function(ret, err) {
						api.hideProgress();
						//得到用户名的token
						var userQQName=ret.info.nickname;
						// 得到qq用户名若想引用ret的值，直接ret.info是它的信息对象，可以继承引用。
						var userQQImgurl = ret.info.figureurl_qq_2;
						qqopenmianpage();
						//偏好存储用于侧滑
						api.setPrefs({
	                        key:'userQQName',
	                        value:userQQName
                        });
					    api.setPrefs({
	                        key:'userQQImgurl',
	                        value:userQQImgurl
                        });
						var key = 'user';
						var user = {};
						user.userQQName = userQQName;
						user.userQQImgurl = userQQImgurl;
						
						$api.setStorage(key, user);
						
							
					});
}
//打开进度
function showPro(){
api.showProgress({
		style : 'default',
		animationType : 'fade',
		title : '登录中...',
		text : '请稍后...',
		modal : false
		});
}
//打开主界面
function qqopenmianpage() {
	api.openSlidLayout({
	    
		type : 'left',
		leftEdge : 120,
		fixedPane : {
			name : 'fixed',
			url : '../sidepage.html'
		},
		slidPane : {
		   
			name : 'slide',
			url : '../mainpage_win.html',
			bounces : false, //（可选项）是否弹动，默认值：若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为false
			scrollToTop : false, //（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。默认值：true。只iOS有效
			vScrollBarEnabled : true, //（可选项）是否显示垂直滚动条，默认true
			hScrollBarEnabled : false, //（可选项）是否显示水平滚动条，默认true
			scaleEnabled : true, //（可选项）页面是否可以缩放，布尔型，默认值：false
			allowEdit : false, //（可选项）是否允许长按页面时弹出选择菜单
			softInputMode : 'auto', //（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，参考键盘弹出页面调整方式常量，只iOS有效
			customRefreshHeader : 'UIPullRefreshFlash' //（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用api.setCustomRefreshHeaderInfo方法来使用自定义下拉刷新组件
		}
	}, function(ret) {
	});

}
