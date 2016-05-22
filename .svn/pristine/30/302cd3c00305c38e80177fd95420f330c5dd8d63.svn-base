apiready = function() {
	smsVerify = api.require('smsVerify');
	// 注册初始化
	register();

};
//关闭窗口
function closeWin() {
	api.closeWin({
	})
}

//注册初始化
function register() {
	smsVerify.register(function(ret, err) {
		if (ret.status) {
			console.log("注册成功");
		} else {
			console.log("注册失败");
		}
	});

}



//校验验证码
function verify() {
	var phone = document.getElementById("phone").value;
	var code = document.getElementById("code").value;
	smsVerify.verify({
		phone : phone,
		code : code,
	}, function(ret, err) {
		if (ret.status) {
			userregister();
		} else {
			api.alert({
				msg : +' 您的验证码有误,请重新获取'
			});
		}
	});

}

//用户信息存入mcm
function userregister() {

	api.showProgress({
		title : '正在注册...',
		modal : false
	});
	var model = api.require('model');
	var query = api.require('query');
	model.config({
		appKey : '615264D3-EE93-0FB1-FE3E-C3A68799C937',
		host : 'http://www.apicloud.com'
	});
	var phone = $api.byId('phone').value;
	var password = $api.byId('password').value;
	var passwordmd = hex_md5(password);
	model.insert({
		class : 'loginuser',
		value : {
			username : phone,
			password : passwordmd
		}
	}, function(ret, err) {
		if (ret) {
			api.hideProgress();
			api.alert(function(ret, err) {
				if (ret.buttonIndex == 1) {
					api.closeWin();
				}
			});
		} else {
		    api.hideProgress();
			alert("注册失败")
		}
	});
}

//登录的连接
function userlogin() {
	api.openWin({
		name : 'userlogin',
		url : 'userlogin.html ',
		opaque : true,
		vScrollBarEnabled : false
	});

}

