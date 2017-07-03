var web = {};
web.constant = {
	ownPwd:/^(?![0-9]+$)(?![!@#$%,.]+$)(?![a-zA-Z]+$)([0-9A-Za-z]{6,20}|[0-9!@#$%,.]{6,20}|[!@#$%,.A-Za-z]{6,20}|[0-9!@#$%+,.A-Za-z]{6,20})$/,
	ownPwd2:/^(?![0-9a-zA-Z]{10,20}$|[a-zA-Z!@#$%,.]{10,20}$|[0-9!@#$%,.]{10,20}$)[a-zA-Z0-9!@#$%,.]{10,20}$/i,
	customerType:"0",
	companyType:"1",
	areaTypeIndex:"请选择您所在国家或地区",
	loginIdIndex:"请输入手机号码和电子邮箱（如果为中国大陆以外地区只能填写电子邮箱）",
	codeIndex:"请输入右侧图片显示的图形码",
	loginIdExistTip:"账户名已存在，请更换！",
	loginIdAllTip:"输入邮箱地址或手机号",
	loginIdEmailTip:"输入邮箱地址",
	loginIdPhoneTip:"输入手机号",
	validateCodeTip:"输入验证码",
	areaTypeMsg:"请选择您所在国家或地区。",
	loginIdPhoneMsg:"请输入的手机号。",
	loginIdPhoneLMsg:"手机号码最长不可超过11位。",
	loginIdPhoneEMsg:"您输入的手机号格式不正确。",
	loginIdEmailMsg:"请输入的邮箱地址。",
	loginIdEmailLMsg:"邮箱地址最长不可超过30位。",
	loginIdEmailEMsg:"您输入的邮箱格式不正确。",
	loginIdMsg:"请输入的手机号或邮箱地址。",
	loginIdEMsg:"您输入的手机号或邮箱格式不正确。",
	codeEMsg:"请输入图形验证码。",
	successMsg:"填写正确。",
	checkOkMsg:"请勾选是否同意畅捷支付服务协议。",
	phoneCodeError:"手机校验码校验不通过，请重新验证。",
	phoneCodeOut:"手机校验码已超时，请重新验证。",
	emailSendYes:"邮件发送成功，请注意查收。",
	emailSendNo:"邮件发送失败。",
	phoneSendYes:"手机校验码发送成功，请注意查收。",
	phoneSendNo:"手机校验码发送失败。",
	prefix:"{'code':'",
	prefix2:"','error':'",
	suffix:"'}",
	errorClass:"red01",
	successClass:"grep",
	showErr:"00",
	showSuc:"01",
	phoneCodeEMsg:"请输入手机校验码。",
	loginPwdFind:"06",
	loginPwdUpdate:"04",
	payPwdUpdate:"05",
	payPwdFind:"03",
	bindPhone:"07",
	sendTypeEmail:"email",
	sendTypePhone:"phone"
}