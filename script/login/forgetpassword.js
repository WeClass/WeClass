apiready = function() {
	smsVerify = api.require('smsVerify');
	// 注册初始化
	register();

};
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

function closeWin() {
	api.closeWin({

	})
}

function retstting() {
	api.openWin({
		name : 'resettingpassword',
		url : 'resettingpassword.html',
		opaque : true,
		vScrollBarEnabled : false
	});
}

// 发语音验证码
function voice() {
	var phone = document.getElementById("phone").value;
	if (phone == null || phone == "") {
		alert("输入手机号");
	} else {

		smsVerify.voice({
			phone : phone,
		}, function(ret, err) {
			if (ret.status) {
				api.alert({
					msg : '语音发送成功'
				});

			} else {
				api.alert({
					msg : err.code + ' 语音发送失败'
				});
			}
		});

	}
}

//校验验证码
function verify() {

	var phone = document.getElementById("phone").value;
	var code = document.getElementById("voicecode").value;
	if (phone == null || phone == "") {
		alert("输入手机号");
	} else {

		smsVerify.verify({
			phone : phone,
			code : code,
		}, function(ret, err) {
			if (ret.status) {
				//验证成功
				retstting();
			} else {
				api.alert({
					msg : +' 您的验证码有误'
				});
			}
		});

	}

}

