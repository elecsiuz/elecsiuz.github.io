$(function(){
    // init
var regAccount  = new RegExp("^[A-Za-z0-9]{4,40}$"),//account
regPhone = /(1[3458]\d{9},)*1[3458]\d{9}/g,//phone
rePwd = /^.{6,20}$/,//pwd
reEmail  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,//Email
reMessage = /^\d{6}$/;//Message
// account
$("#account").blur(function(){
    var value = $(this).val();
var re = regAccount.test(value); 
obj.res = re;
re==true ? obj.regster($(this),"账号输入正确！") : obj.regster($(this),"账号格式错误！");
})
// pwd
$("#pwd").blur(function(){
    var value = $(this).val();
var re = rePwd.test(value); 
obj.res = re;
re==true ? obj.regster($(this),"") : obj.regster($(this),"密码由6-20位任意字符组成！");
})
// repwd
$("#rePwd").blur(function(){
var value = $(this).val();
var re = $("#pwd").val(); 
obj.res = value === re;
obj.res==true ? obj.regster($(this),"") : obj.regster($(this),"两次输入不一致！");
})
// phone
$("#phone").blur(function(){
var value = $(this).val();
var re = regPhone.test(value); 
obj.res = re;
re==true ? obj.regster($(this),"") : obj.regster($(this),"手机号输入有误！");
})
// email
$("#email").blur(function(){
    var value = $(this).val();
var re = reEmail.test(value); 
obj.res = re;
re==true ? obj.regster($(this),"") : obj.regster($(this),"邮箱输入格式不正确！");
})
// message
$("#message").blur(function(){
    var value = $(this).val();
var re = reMessage.test(value); 
obj.res = re;
re==true ? obj.regster($(this),"") : obj.regster($(this),"短信验证码错误！");
})
})
// create Object
var obj = {
res : true,
// verification test
regster : function(o,tip){
if(this.res==true){
   o.siblings("span").removeClass('prompt'); 
}else{
   o.siblings("span").addClass('prompt');
}
o.siblings("span").html(tip);
}
}