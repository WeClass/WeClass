apiready = function() {
	var header = $api.byId('detail-header');
	$api.fixIos7Bar(header);
}
function closeWin() {
	api.closeWin();
}

function register() { 
    var oPhoneDiv =$api.byId("phoneInput");
    oPhoneDiv.style.borderBottom="1px solid #d4d4d4";
	api.openWin({
		name : 'userregister',
		url : 'userregister.html',
		opaque : true,
		vScrollBarEnabled : false
	});
}

function forgetpassword() {
   var  phone =$api.byId("phone").value;
  
   if(phone==null||phone==""){
	alert("请输入手机号");
	}else{
	api.openWin({
		name : 'forgetpassword',
		url : 'forgetpassword.html',
		opaque : true,
		vScrollBarEnabled : false,
		pageParam : {
			phone : phone
		}, // //注意把phone传递过去
	});
	
	}
}

function ensurelogin() {
    
	//得到用户名以及密码
	var phone = $api.byId('phone').value;
	var pwd = $api.byId('password').value;
	//用户名为空
	if (phone == null || phone == "") {
		alert("手机号不能为空");
	}
	//用户名不为空
	else {
		//密码为空
		if (pwd == null || pwd == "") {
			alert("密码不能为空");
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
	var user = api.require('user');
	var phone = $api.byId('phone').value;
	var pwd = $api.byId('password').value;
	model.config({
		appKey : '615264D3-EE93-0FB1-FE3E-C3A68799C937',
		host : 'http://www.apicloud.com'
	});

	user.login({//登录开始
		username : phone, //用户名
		password : pwd//密码
	}, function(ret, err) {

		if (ret && ret.id) {//如果登录成功，获取该用户的imToken
			api.hideProgress();
			//alert(JSON.stringify(ret));
			openmianpage();
			$api.byId("password").value = "";
			$api.byId("phone").value = "";
		} else {
			api.hideProgress();
			api.alert({
				msg : err.code + ' ' + err.msg
			});
			$api.byId("password").value = "";
			$api.byId("phone").value = "";
		}
	})
}
//打开主界面
function openmianpage() {
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


