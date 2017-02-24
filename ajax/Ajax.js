function Ajax(url,fnSucc,fnFailed){
	//1.创建Ajax对象
	if(window.XMLHttpRequest)
	{
		var oAjax=new XMLHttpRequest();
		//除了IE6
	}
	else{
		var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
		//IE6
	}
	//2.连接服务器
	//open(方法，文件名，异步传输)
	oAjax.open("GET",url,true);
	//"文件名?t="+new Date().getTime()
	//3.发送请求
	oAjax.send();

	//4.接收返回
	oAjax.onreadystatechange=function(){
		//oAjax.readyState //浏览器和拂去其，进行到哪一步了
		if(oAjax.readyState==4){
			if(oAjax.status==200){
				fnSucc(JSON.parse(oAjax.responseText));
				//alert("成功"+oAjax.responseText);
			}
			else{
				if(fnFailed){
					fnFailed(oAjax.status);
				}
				//alert("失败"+oAjax.status);
			}
		}
	};
	/*oAjax.readyState:
	0  还没有调用open()方法
	1  已调用send()方法，正在发送请求
	2  send()方法完成，已收到全部响应内容
	3  正在解析响应内容
	4  响应内容解析完成，可以在客户端调用了
	*/
}