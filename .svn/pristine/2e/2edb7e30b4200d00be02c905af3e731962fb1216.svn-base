var question = function() {
	var question_type = $api.byId("advice-type").value;
	var question_content = $api.byId("question-content").value;
	var model = api.require('model');
	var query = api.require('query');
	if (question_type == null || question_type == "" || question_content == null || question_content == "") {
		alert("信息不能为空");
	} else {
		model.config({
			appKey : '615264D3-EE93-0FB1-FE3E-C3A68799C937',
			host : 'http://www.apicloud.com'
		});
		model.insert({
			class : 'userquestion',
			value : {
				questiontype : question_type,
				questioncontent : question_content
			}
		}, function(ret, err) {
			if (ret) {

				doReset();
			} else {
				api.alert({
					msg : err.code + ' ' + err.msg
				});
			}
		});
	}
}


