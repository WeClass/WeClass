apiready = function() {
	smsVerify = api.require('smsVerify');
	// 注册注册应用(必须有)
	smsVerify.register(function(ret, err){
    if(ret.status){
        //api.alert({msg: '注册初始化'});
    }else{
        api.alert({
				msg : err.code + ' ' + err.msg
			});
    }
});
};

//校验验证码

function verify() {
	var phone = document.getElementById("phone").value;
	var code = document.getElementById("code").value;
	var password = document.getElementById("password").value;
	//首先判断手机号不空
	if (phone == null || phone == ""||code==null ||code=="") {
		alert("请填写完整信息");
	}
    else{
	smsVerify.verify({
		phone : phone,
		code : code,
	}, function(ret, err) {
		if (ret.status) {
			//验证密码不为空
			if (password == null || password == "") {
				alert("请填写密码");
			} else {
				userregister();
			}

		} else {
			api.alert({
				msg : err.code + ' ' + err.msg
			});
		}
	});
   }
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
		class : 'user',
		value : {
			username : phone,
			password : password
		}
	}, function(ret, err) {
		if (ret) {
            
			api.hideProgress();
			
			api.closeWin({
            });
           
            userlogin();
		} else {
			api.hideProgress();
			api.alert({
				msg : err.code + ' ' + err.msg
			});
		}
	});
}





