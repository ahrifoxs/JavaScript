


//底部webview,  main.html  主/父webview

mui.init();

//创建4个子webview


mui.plusReady(function(){
//	获取父webview
	var parentWv = plus.webview.currentWebview();
	
	var pageList = [
	{
		url:'../message/message.html',
		id:'message'
	},
	{
		url:'../address-book/address-book.html',
		id:'address-book'
	},
	{
		url:'../discover/discover.html',
		id:'discover'
	},
	{
		url:'../mine/mine.html',
		id:'message'
	}
	];
	//通过for循环创建4个子页面
	for(var i=0,l=pageList.length;i<l;i++){
		var url = pageList[i].url;
		var id = pageList[i].id;
		//console.info(url+"-------"+id);
		//如果该webview已经被创建,则跳过该循环
		if(plus.webview.getWebviewById(id)){
			continue;
		}
//		开始创建webview
	var newWv=plus.webview.create(url,id,{
			bottom:'50px',
			top:'0px',
			popGesture:'none'
			
		});
		
		//第一个webview显示出来，其他的隐藏
		/*if(i===0){
			newWv.show();
		}else{
			newWv.hide();
		}*/
		i===0? newWv.show():newWv.hide();
		
		//把子webview追加到父webview
		parentWv.append(newWv);
	}
	var showWv='message';
	mui('.mui-bar').on('tap','mui-tab-item',function(e){
		//mui.alert("我被点击了")
		//如果当前显示的子页面和即将要点击的子页面为同一个，那么就什么都不处理
		var showWvId=this.dataset.id;
		if(showWv==showWvId)return;
		
		plus.webview.getWebviewById(showWv),hide();
		
		//更新当前显示的子页面id
		//隐藏当前正显示的Wv
		console.info(showWvId);
		plus.webview.getWebviewById(showWv),show();
		showWv = showWvId;
		//隐藏当前正显示的webview，显示即将点击的那个webview
	})
	
});
