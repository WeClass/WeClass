/*{
 status: true,  //布尔型；true||false
 token: '',     //字符串类型；从新浪微博服务器获取的 accessToken，接口调用凭证，传给 getUserInfo 接口获取用户信息
 expire: '',    //字符串类型：token 有效期（时间戳）
 userId: ''     //字符串类型；从新浪微博服务器获取的 userId，新浪微博分配的用户id，传给 getUserInfo 接口获取用户信息
 }
 */
function weibologin() {
	var weibo = api.require("weibo");
	//判断当前设备是否安装了 weibo客户端
	weibo.isInstalled(function(ret, err) {
		if (ret.status) {
			//安装新浪微博客户端,授权登录（用于实现第三方登录）
			weibo.auth(function(ret, err) {
				if (ret.status) {
					//如果授权登录成功，则获取用户的信息
					alert(ret.token + "          " + ret.userId);
					weibo.getUserInfo({
						token : ret.token,
						userId : ret.userId
					}, function(ret, err) {
						if (ret.status) {
							//alert(JSON.stringify(ret.userInfo));
							weiboopenmianpage();
						} else {
							alert('获取用户信息失败');
						}
					});
				} else {
					alert('登录失败');
				}
			});
		} else {
			alert('未安装新浪微博客户端');
		}
	});
}

//打开主界面
function weiboopenmianpage() {
	api.openSlidLayout({
		type : 'left',
		leftEdge : 120,
		fixedPane : {
			name : 'fixed',
			url : '../sidepage.html'
		},
		slidPane : {
			name : 'slide',
			url : '../mainpage.html',
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


