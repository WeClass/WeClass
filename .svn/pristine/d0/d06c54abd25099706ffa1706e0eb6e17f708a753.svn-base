apiready = function() {
	var header = $api.byId('detail-header');
	$api.fixIos7Bar(header);
}
function closeWin() {
	api.closeWin();
}

function register() {
	api.openWin({
		name : 'userregister',
		url : 'userregister.html',
		opaque : true,
		vScrollBarEnabled : false
	});
}

function forgetpassword() {
	api.openWin({
		name : 'forgetpassword',
		url : 'forgetpassword.html',
		opaque : true,
		vScrollBarEnabled : false
	});
}

function ensurelogin() {
	//得到用户名以及密码
	var phone = $api.byId('phone').value;
	var pwd = $api.byId('password').value;
	//用户名为空
	if (phone == null || phone == "") {
		alert("用户名和密码不能为空");
	}
	//用户名不为空
	else {
		//密码为空
		if (pwd == null || pwd == "") {
			alert("用户名和密码不能为空");
		}
		//密码不空
		else {
			api.showProgress({
				title : '正在登录...',
				modal : false
			});
			//检索所有的手机号
			getphonenumall();

		}

	}

}

//检索所有的手机号
function getphonenumall() {
	var model = api.require('model');
	var phone = $api.byId('phone').value;
	var pwd = $api.byId('password').value;
	model.config({
		appKey : '615264D3-EE93-0FB1-FE3E-C3A68799C937',
		host : 'http://www.apicloud.com'
	});
	var user = api.require('user');
	user.login({//登录开始
		username : phone, //用户名
		password : pwd//密码
	}, function(ret, err) {
		
		if (ret && ret.id) {//如果登录成功，获取该用户的imToken
		    api.hideProgress();
		    alert(JSON.stringify(ret));
		} else {
			api.hideProgress();
			alert('登录失败');
		}
	})
}

