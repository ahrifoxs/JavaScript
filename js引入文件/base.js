//前台调用
var $ = function (_this) {
    return new Base(_this);
}
//基础类库
function Base(_this) {
    //创建数组，用来保存节点或节点数组
    this.elements = [];
    if(_this != undefined){
        this.elements[0] = _this;
    }
}
//通过id获取元素
Base.prototype.getId = function (id) {
    this.elements.push(document.getElementById(id));
    return this;
};
//通过tagName获取元素
Base.prototype.getTag = function (tag) {
    var tags = document.getElementsByTagName(tag);
    for(var i=0;i<tags.length;i++){
        this.elements.push(tags[i]);
    }
    return this;
};
//通过class方法获取元素
Base.prototype.getClass = function (className,idName) {
    var node = null;
    if(arguments.length == 2){
        node = document.getElementById(idName);
    }else{
        node = document;
    }
    var all = node.getElementsByTagName("*");
    for(var i=0;i<all.length;i++){
        if(all[i].className == className){
            this.elements.push(all[i]);
        }
    }
    return this;
};
//获取节点数组的某一个元素
Base.prototype.getElement = function (num) {
    var element = this.elements[num];
    this.elements = [];
    this.elements[0] = element;
    return this;
};
//设置css方法
Base.prototype.css = function (attr,value) {
    for(var i=0;i<this.elements.length;i++){
        if(arguments.length == 1){
            if(typeof window.getComputedStyle != "undefined"){
                return window.getComputedStyle(this.elements[i],false)[attr];
            }else if(typeof this.elements[i].currentStyle != "undefined"){
                return this.elements[i].currentStyle[attr];
            }
        }
        this.elements[i].style[attr] = value;
    }
    return this;
};
//设置添加class方法(addClass)
Base.prototype.addClass = function (className) {
    for(var i=0;i<this.elements.length;i++){
        if(!this.elements[i].className.match(new RegExp("(\\s|^)" + className+ "(\\s|$)"))){
            this.elements[i].className += " " + className;
        }
    }
    return this;
};
//设置删除css方法(removeClass)
Base.prototype.removeClass = function (className) {
    for(var i=0;i<this.elements.length;i++){
        if(this.elements[i].className.match(new RegExp("(\\s|^)" + className+ "(\\s|$)"))){
            this.elements[i].className = this.elements[i].className.replace(new RegExp("(\\s|^)" + className+ "(\\s|$)")," ");
        }
    }
    return this;
};
//设置link或style中的CSS规则
Base.prototype.addRule = function (num,selectText,cssText,position) {
    var sheet = document.styleSheets[num];
    if(typeof sheet.insertRule != "undefined"){
        sheet.insertRule(selectText+"{"+ cssText +"}",position);
    }else if(typeof sheet.addRule != "undefined"){
        sheet.addRule(selectText,cssText,position);
    }
    return this;
};
//设置移除link或style中的CSS规则
Base.prototype.removeRule = function (num,index) {
    var sheet = document.styleSheets[num];
    if(typeof sheet.insertRule != "undefined"){
        sheet.deleteRule(index);
    }else if(typeof sheet.addRule != "undefined"){
        sheet.removeRule(index);
    }
    return this;
};
//设置html方法
Base.prototype.html = function (str) {
    for(var i=0;i<this.elements.length;i++){
        if(arguments.length == 0){
            return this.elements[i].innerHTML;
        }
        this.elements[i].innerHTML = str;
    }
    return this;
};
//设置click方法
Base.prototype.click = function (fn) {
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onclick = fn;
    }
    return this;
};
//设置鼠标移入移出方法
Base.prototype.hover = function (over,out) {
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onmouseover = over;
        this.elements[i].onmouseout = out;
    }
    return this;
};
//设置显示方法
Base.prototype.show = function () {
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display = "block";
    }
    return this;
};
//设置隐藏方法
Base.prototype.hide = function () {
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display = "none";
    }
    return this;
};
