
 function  closeFrame(){
   api.closeWin({
   });
 }
	
 function downLoadVideo(){
 var headvideoUrl = api.pageParam.videoDetailUrl;
 var headDetaildataId = api.pageParam.videoDetaildataId;
 downvideo(headDetaildataId,headvideoUrl);
 }
 function  opendownWin(headDetaildataId,headvideoUrl){
    var manager = api.require('downloadManager');
    manager.openManagerView({
        title : '视频下载'
    }, function(ret) {
        var id = ret.id;
        var mimeType = ret.mimeType;
        var savePath = ret.savePath;
        manager.openDownloadedFile({
            id : headDetaildataId
        }, function(ret, err) {
            if (ret.status) {
              opendownWin(headDetaildataId,headvideoUrl)            
            }
             else {
                 //alert( JSON.stringify( err ) +"AAA");
            }
        });
    });
  }
 function downvideo(headDetaildataId,headvideoUrl){
   var manager =api.require('downloadManager');
   manager.enqueue({
	   url:headvideoUrl,//资源地址，不能为空
	   savePath :'fs://video'+headvideoUrl,//存储路 径，为空时使用自动创建的路径
	   cache: true,//是否使用缓存
	   allowResume :true ,//是否开启断点续传，需要服务器支持
	   //headers: ,
	   //iconPath：
	   uncompress : false,//下载完成时是否解压缩文件
       mimeType : '/mp4',//被下载目标的类型（/）
       title : '视频', //展示在managerView列表中的文件标题
       networkTypes : 'all'//允许自动下载的网络环境，参考网络环境常量
   },function(ret,err){
   	 if(ret.id){
   	    //  正在进入下载界面 
   	    opendownWin(headDetaildataId,headvideoUrl)
   	 }else{
   	     alert( JSON.stringify( err ) +"BBB");
   	 }
   });
  }  
     
    
   
