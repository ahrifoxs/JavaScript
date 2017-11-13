//初始化mui框架
mui.init();
//用户输入账号和密码
//用户点击登录按钮

//捕获用户点击登录按钮的事件
document.getElementById('login').addEventListener('tap',function(){
	var usernameInput = document.querySelector('input[name="username"]');
	var passwordInput = document.querySelector('input[name="password"]')

//获取到用户输入的账号密码
    var usernameValue = usernameInput.value;
    var passwordValue = passwordInput.value;
   console.info("账号是：",usernameValue,"密码是：",passwordValue);
   if(!usernameValue||!passwordValue){
   	alert('用户名或者密码不能为空')
   	return
   }
   
   if(usernameValue==="admin"&&passwordValue==="123456"){
   	console.log('登录成功，开始跳转页面');
   	mui.openWindow("../../main/main.html","main");
   }else{
   	mui.toast('用户名或密码错误，请重新输入');
   }
   
//使用ajax把账号密码传输到服务器上，在服务器进行账号密码的校验
//如果校验成功，跳转界面到主页
//如果校验失败，提示密码错误



});