 //清除缓存
 H.ready(function() {
			H.getCacheSize(function(ret, err) {
				H.D("#cacheSize").innerText = (ret.size / 1000 / 1000).toFixed(2) + "M";
			});
		});
//联系客服
if (H.systemType == "ios") {
			H.D("#QQ").setAttribute("href", "mqq://im/chat?chat_type=wpa&uin=2671523019&version=1&src_type=web");
		} else {
			H.D("#QQ").setAttribute("href", "mqqwpa://im/chat?chat_type=wpa&uin=2671523019");
		}