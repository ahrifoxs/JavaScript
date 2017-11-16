//封装新建ajax
function createXHR() {
    if(typeof XMLHttpRequest != 'undefined'){
        return new XMLHttpRequest();
    }else if(typeof  ActiveXObject != undefined){
        var version = [
            'MSXML2.XMLHttp.6.0',
            'MSXML2.XMLHttp.3.0',
            'MSXML2.XMLHttp'
        ]
        for(var i = 0, len = version.length; i < len; i++){
            try {
                return new ActiveXObject(version[i])
            } catch (e) {
                //跳过
            }
        }
    }else {
        throw new Error('您的浏览器不支持xhr对象')
    }
}

//名值对转换为字符串
function params(data){
    var arr = [];
    for(var i in data){
        arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]))
}
return arr.join('&');
}
//封装ajax
function ajax(obj){
    //创建 xhr对象
    var xhr = createXHR();
    //设置请求地址,并且处理缓存问题
    obj.url = obj.url + '?rand='+Math.random();
    obj.data = params(obj.data);
    //异步方式处理
    if(obj.async == true){
        //接受响应
        xhr.onreadystatechange = function(){
            if(xhr.readyState ==4){
                callback();
            }
        }
    }else if(obj.async == false){
        callback();
    }
    //设置提交方式
    xhr.open(obj.method,obj.url,obj.async);
    if(obj.method == 'post'){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send(obj.data);
    }else{
        xhr.send(null)
    }
    function callback(){
        if(xhr.status == 200){
            obj.success(xhr.responseText);
        }else{
            alert('获取数据错误!错误代码:'+xhr.status+'错误信息'+xhr.statusText)
        }
    }
}