apiready= function(){
        var header = $api.byId('topbar');
        $api.fixIos7Bar(header); 
        userToken();
 }
 //得到QQ用户名
 function  userToken(){
  api.getPrefs({
	  key:'userQQName'
  },function(ret,err){
  	if(ret){
  	 var userQQName = document.getElementById("loginuser");
  	 if(ret.value==""||ret.value==null){
  	    userQQName.innerHTML ='登录';
  	 }else{
  	    userQQName.innerHTML = ret.value;
  	 }
  	}else{
  	  alert( JSON.stringify( err ) );
  	}
  });
  api.getPrefs({
	  key:'userQQImgurl'
  },function(ret,err){
  	var userQQImgurl = document.getElementById("topbar");
  	if(ret){
  	 if(ret.value==""||ret.value==null)
  	   {
  	    //onclick="openworkDetail(\'' + jsonList[i].id + '\',\'' + jsonList[i].homeworkcontent.url + '\')"    >'
  	    //转义
  	    userQQImgurl.style.backgroundImage ="url(\.'./../image/sidepage/pic_headphoto_normal.png  +   \' )";
  	   }else{
  	       
  	     userQQImgurl.style.backgroundImage ="url("+ret.value + ")";
  	     userQQImgurl.style.borderRadius ="50px ";
  	     userQQImgurl.style.border ="1px solid #fff";
  	    
  	 }
  	}else{
  	    //转义
  	    
  	     userQQImgurl.style.backgroundImage ="url(\.'./../image/sidepage/pic_headphoto_normal.png  +   \' )";
  	     alert( JSON.stringify( err ) );
  	}
  });
 
 }
 
 //兼容不同的浏览器的style
 function getStyle(obj,attr){
   return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj,null)[atrr];
 }
 function openNewWin(type){
  
   api.openWin({
        
	   name: type,
	   url: 'side_page/'+type+'.html',
	   rect:{
	      x:0,
	      y:0,
	      w:'auto',
	      h:'auto'
	      
	   },
	   bounble:false,
	   delay:200
	  });
 }