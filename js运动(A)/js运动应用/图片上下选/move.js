function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}
	else{
		return getComputedStyle(obj,false)[name];
	}
}

function startMove(obj,arrt,iTarget){

		clearInterval(obj.timer);

		obj.timer=setInterval(function(){
			if(arrt=="opacity"){
				var cur=Math.round(parseFloat(getStyle(obj,arrt))*100);
				//Math.round() 四舍五入
			}
			else{
				var cur=parseInt(getStyle(obj,arrt));	
			}
			speed=(iTarget-cur)/6;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(cur == iTarget){
				clearInterval(obj.timer);
			}
			else{
				if(arrt=="opacity"){
					cur+=speed;
					obj.style.fliter="alpha(opacity:"+cur+")";
					obj.style.opacity=cur/100;
				}
				else{
					obj.style[arrt]=cur+speed+"px";
				}
			}
		},30);
};