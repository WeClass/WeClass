apiready = function() {
		    var flag;
		    api.getPrefs({
	            key:'flag'
            },function(ret,err){
            	if(ret){
            	  if(ret.value==""){	    
					 api.openWin({
						name : 'lanuch',
						url : 'html/lanuch.html'
					});
            	   }
            	  //true
            	  if(ret.value=="true"){
					api.openSlidLayout({  
						type : 'left',
						leftEdge : 120,
						fixedPane : {
							name : 'fixed',
							url : 'html/sidepage.html'
						},
						slidPane : {
							name : 'slide',
							url : 'html/mainpage_win.html',
							//url:'html/test.html',
							bounces:false,                      //（可选项）是否弹动，默认值：若在 config.xml 里面配置了pageBounce，则默认值为配置的值，否则为false
							scrollToTop:false  ,                  //（可选项）当点击状态栏，页面是否滚动到顶部。若当前屏幕上不止一个页面的scrollToTop属性为true，则所有的都不会起作用。默认值：true。只iOS有效
							vScrollBarEnabled:true,             //（可选项）是否显示垂直滚动条，默认true 
                            hScrollBarEnabled:false,             //（可选项）是否显示水平滚动条，默认true
							scaleEnabled:true,                  //（可选项）页面是否可以缩放，布尔型，默认值：false
                            allowEdit:false,                    //（可选项）是否允许长按页面时弹出选择菜单
							softInputMode:'auto'  ,              //（可选项）当键盘弹出时，输入框被盖住时，当前页面的调整方式，参考键盘弹出页面调整方式常量，只iOS有效
							customRefreshHeader:'UIPullRefreshFlash' //（可选项）设置使用自定义下拉刷新模块的名称，设置后可以使用api.setCustomRefreshHeaderInfo方法来使用自定义下拉刷新组件
						}
					}, function(ret) {
					});
            	  }
            	}else{
            	  alert( JSON.stringify( err ) );
            	}
            });
            
		api.setPrefs({
	                key:'flag',
	                value:'true'
                });
		}	