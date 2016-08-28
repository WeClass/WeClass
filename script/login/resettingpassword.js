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
   /*
    * 得到要修改的手机号的新密码，根据手机号修改密码字段.
    */
    var  getphone =api.pageParam.phone;
    
	//alert(getphone);
    var newpwd= $api.byId("newpassword").value;
    var model = api.require('model');
    var user = api.require('user');
    
    model.config({
		appKey : '615264D3-EE93-0FB1-FE3E-C3A68799C937',
		host : 'http://www.apicloud.com'
	});
	
    user.updatePassword({
	    password:newpwd
    },function(ret,err){
    	if(ret){
    	api.closeWin({
        });
    	newpwduserlogin();
    	}else{
    	api.alert({
				msg : err.code + ' ' + err.msg
			});
    	}
    });
}
//登录的连接
function newpwduserlogin() {
	api.openWin({
		name : 'userlogin',
		url : 'userlogin.html ',
		opaque : true,
		vScrollBarEnabled : false
	});

}


