apiready = function() {
	var videoDetaildataId = api.pageParam.myvideodata;
	//alert( "videoDetail.js"     +videoDetaildataId);
	var videoDetailUrl=api.pageParam.myvideourl;
	//alert("videoUrl"+videoUrl);
	//得到视频的每个id
	var header = $api.byId('header');
	//适配iOS 7+，Android 4.4+状态栏
	$api.fixStatusBar(header);
	var main = $api.byId('mainvideo');
	var mainPos = $api.offset(main);
	api.openFrame({
		name : 'videoDetail-con',
		url : 'videoDetail-con.html',
		bounces : true,
		opaque : true,
		pageParam : {
		    videoDetaildataId : videoDetaildataId,
			videoDetailUrl    :videoDetailUrl
		}, // //注意把id传递过去

		rect : {
			x : 0,
			y : 'auto',
			w : 'auto',
			h : 'auto'
		},

		vScrollBarEnabled : false
	});
     
	//for iOS7 +
	var sys, ver, height = 44;
	sys = api.systemType;
	if (sys === 'ios') {
		ver = api.systemVersion;
		ver = parseInt(ver, 10);
		if (ver >= 7) {
			height += 20;
		}
	}
   
    api.openFrame({
        name: 'videoDetail-head',
        url: 'videoDetail-head.html',
        rect: {
            x: 0,
            y: 0,
            w: api.winWidth,
            h: height
        },
        bounces: false,
        vScrollBarEnabled: false
    });
    
	
  
};
