var inputWrap = $api.domAll('.input-wrap');
var i = 0, len = inputWrap.length;
for (i; i < len; i++) {
	var txt = $api.dom(inputWrap[i], '.txt');
	var del = $api.dom(inputWrap[i], '.del');
	(function(txt, del) {
		$api.addEvt(txt, 'focus', function() {
			if (txt.value) {
				$api.addCls(del, 'show');
			}
			$api.addCls(txt, 'light');
		});
		$api.addEvt(txt, 'blur', function() {
			$api.removeCls(del, 'show');
			$api.removeCls(txt, 'light');
		});
	})(txt, del);
}
//全删按钮
function delWord(el) {
	var input = $api.prev(el, '.txt');
	input.value = '';
}

//自动获取焦点
function loginedit(el) {
    var del = $api.next(el, '.del');
	if (el.value) {
		$api.addCls(del, 'show');
	}
	$api.addCls(el, 'light');
}

//失去焦点
function logincancel(el) {
    var phoneNumber= $api.byId("phone");
    var del = $api.next(el, '.del');
    var oPhoneDiv =$api.byId("phoneInput");
    if(!/^1[3|4|5|7|8]\d{9}$/.test(phoneNumber.value))
    {
    oPhoneDiv.style.borderBottom="1px solid #DB3309";
    phoneNumber.value="";
    }else{
    oPhoneDiv.style.borderBottom="1px solid #d4d4d4";
    }
	
	$api.removeCls(del, 'show');
	$api.removeCls(el, 'light');
}
