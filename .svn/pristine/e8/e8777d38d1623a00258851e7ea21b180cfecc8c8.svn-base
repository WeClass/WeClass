var advice=function (){
    var advice_type=$api.byId("advice-type").value;
    var advice_content=$api.byId("advice-content").value;
    
    if(advice_type==null||advice_type==""){
    alert("信息不能为空");
    }
    else{
    var model =api.require('model');
    var query =api.require('query');
    model.config({
	    appKey:'615264D3-EE93-0FB1-FE3E-C3A68799C937',
	    host:'http://www.apicloud.com'
    });
    model.insert({
	    class:'useradvice',
	    value:{
	     advicetype:advice_type,
	     advicecontent:advice_content 
	    }
    },function(ret,err){
    	if(ret){
    	mycenter();
    	}else{
    	api.alert({
        msg : err.code + ' ' + err.msg
            });
    	}
        });
      
    }
  }
   

 


