/**
 * Created by ThinkPad on 2017/10/18.
 */
//事件绑定兼容处理
function addEvent(obj,type,fn) {
    if(obj.addEventListener){
        obj.addEventListener(type,fn,false);
    }else if(obj.attachEvent){
        obj.attachEvent("on"+type,fn);
    }
}

//删除事件绑定
function removeEvent(obj, type, fn) {			//移除事件兼容
    if(obj.removeEventListener){
        obj.removeEventListener(type,fn);
    }else if(obj.detachEvent){
        obj.detachEvent("on"+type,fn);
    }
}

//获取事件目标
function getTarget(ev) {						//得到事件目标
    var oEvent = ev || window.event;
    if (oEvent.target) {
        return oEvent.target;
    } else if (window.event.srcElement) {
        return window.event.srcElement;
    }
}

//阻止事件默认行为
function Pre(ev) {
    var oEvent = ev || window.event;
    oEvent.preventDefault ? oEvent.preventDefault() : (oEvent.returnValue=false);
}