apiready = function() {
	var header = $api.byId('topbar');
	$api.fixIos7Bar(header);
}
function closeWin() {
	api.closeWin();
}

//登录的连接
function login() {
	api.openWin({
		name : 'userlogin',
		url : 'userlogin.html ',
		opaque : true,
		vScrollBarEnabled : false
	});

}
function done(){
    var newpwd= $api.byId("newpassword").value;
    var phone=$api.byId("phone").value;
    //存入云端
    var passwordmd = hex_md5(newpwd);
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