function wechatlogin() {
	var wx = api.require('wx');
	//alert("weixin11");
	wx.auth({
		apiKey : 'wxff2a374e9771bead'//在此输入你的微信apikey
	}, function(ret, err) {
		
		if (ret.status) {
			api.showProgress({
				style : 'default',
				animationType : 'fade',
				title : '登录中...',
				text : '请稍后...',
				modal : false
			});
			wx.getToken({
				//apiKey: '',
				//apiSecret: '',
				code : ret.code
			}, function(ret, err) {

				if (ret.status) {
					//获取用户信息
					var accessToken = ret.accessToken;
					var openId = ret.openId;
					wx.getUserInfo({
						accessToken : ret.accessToken,
						openId : ret.openId
					}, function(ret, err) {

						if (ret.status) {
							//将信息同步至服务器
							api.ajax({
								url : '', //你的服务器地址
								method : 'post',
								cache : true,
								timeout : 30,
								dataType : 'json',
								returnAll : false,
								data : {
									values : {
										
									}
								}
							}, function(ret, err) {
								api.hideProgress();
								if (ret.code == 1) {
									api.toast({
										msg : '登录成功',
										duration : 2000,
										location : 'top'
									});

								} else {
									api.alert({
										msg : '' + ret.msg + ''
									});
								}
							})
						}
					});
				}
			});
		} else {
			if (api.systemType == 'android' && err.code == 3) {
				alert("请安装微信客户端");
			}
		}
	})
}
