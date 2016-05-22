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
							//获取成功后的操作
							api.openWin({
								name : 'index',
								url : '../../../index.html',
								opaque : true,
								vScrollBarEnabled : false
							});
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