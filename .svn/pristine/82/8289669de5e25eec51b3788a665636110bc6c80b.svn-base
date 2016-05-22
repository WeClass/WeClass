apiready = function() {
		    var flag;
		    api.getPrefs({
	            key:'flag'
            },function(ret,err){
            	if(ret){
                   //""
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
							url : 'html/mainpage.html'
						}
					}, function(ret) {
					});
            	  }
                    	 
            	}else{
            	  alert( JSON.stringify( ret ) );
            	}
            });
            
				api.setPrefs({
	                key:'flag',
	                value:'true'
                });
		}	