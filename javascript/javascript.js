window.onload=function(){
	//--------思考-------------
	//js会那些处理文档结构的方法，会给我们带来很大的便捷？
	//--------增  删   改   查-----------



	//查
	//document（对象）.getElementById(这里是字符串"string") （方法）
	//1.实参必须是一个字符串或求值得到的字符串
	//2. 一定要检查自己的页面有没有这个id的实参元素
	//3. 该方法的返回值为一个代表了ID的实参的元素的对象
	//    这个对象有很长的原型链，链上的所有方法都可以调用。
	var cc=(function(){return "abc"});

	//var els=document.getElementsByClassName("string");
	//1.该方法返回值 是一个类数组对象
	//2.{0：div,1:div,2:div,3:div,length:4}


	//改
	//setAttribute("","") ;  追加属性
	//setAttribute("属性","属性的值")  属性的意思  el.setAttribute("class","aa")<ul id="u" class="aa"></ul>
	var el=document.getElementById("u");
	//var oldClass=el.getAttribute("class");
	//var tmpArr.push("bb");
	// tmpArr.push("bb");
	// el.setAttribute("class",tmpArr.join(" "));




	//习题：写一个函数， addClass(el,class)
	//var ee=document.getElementById("u");
	// var class="cc dd ee ff";
	// addClass(ee,class);
	// 会给id为u的元素 加上cc dd ee ff 四个class,并且会保留原来的class
	// 如果原来的类名里本身就有 cc dd ee ff 要求我们的函数不会重复添加。

//没写完整
	//增
	// var li=document.createElement("li");
	// li.innerHTML=4;//-->//<li>4</li>
	// var el=document.getElementById("u");找到的父元素u
	// el.appendChild(li);


	// //删除
	// var three=document.getElementById("three");
	// el.removeChild(three);

	// //查
	//var el=document.getElementById document.getelementsByClassName
	//el.getAttribute();

	//改
	//el.setAttribute();







//五子棋：下面包括了许多Dom操作
	var row=10,
		width=Math.floor(500-row)/row+"px",
		sence=document.getElementById("sence"),
	    child;
	var div; 
	var el,el2;

	for(var i=0;i<row;i++){
		el=document.createElement("div");
		el.style.position="absolute";
		el.style.top=(500/row)/2+(500/row)*i+"px";
		el.style.width="500px";
		el.style.height="1px";
		el.style.background="white";
		sence.appendChild(el);
		el2=document.createElement("div");
		el2.style.position="absolute";
		el2.style.left=(500/row)/2+(500/row)*i+"px";
		el2.style.width="1px";
		el2.style.height="500px";
		el2.style.background="white";
		sence.appendChild(el2);
	}

	for(var i=0;i<row;i++){
		for(var j=0;j<row;j++){
			child=document.createElement("div");
			child.setAttribute("class","block");
			child.setAttribute("id",i+"_"+j);
			child.style.width=width;
			child.style.height=width;
			sence.appendChild(child);
		}
	}
	//console.log(2);

	var blocks=document.getElementsByClassName("block");
	var kaiguan=true;
	var dict1={};
	var dict2={};
	var panduan=function(id ,dic){
		var x=Number(id.split("_")[0]);
		var y=Number(id.split("_")[1]);
		var tx,ty;

		var hang=1;
		tx=x;ty=y;
		while(dic[tx+"_"+(ty+1)]){hang++;ty++;}
		tx=x,ty=y;//回到原点
		while(dic[tx+"_"+(ty-1)]){hang++;ty--;}
		if(hang==5)return true;

		var lie=1;
		tx=x;ty=y;
		while(dic[(tx-1)+"_"+ty]){lie++;tx--;}
		tx=x,ty=y;//回到原点
		while(dic[(tx+1)+"_"+ty]){lie++;tx++;}
		if(lie==5)return true;

		var zx=1;
		tx=x;ty=y;
		while(dic[(tx-1)+"_"+(ty+1)]){zx++;tx--;ty++;}
		tx=x,ty=y;//回到原点
		while(dic[(tx+1)+"_"+(ty-1)]){zx++;tx++;ty--;}
		if(zx==5)return true;

		var yx=1;
		tx=x;ty=y;
		while(dic[(tx-1)+"_"+(ty-1)]){yx++;tx--;ty--;}
		tx=x,ty=y;//回到原点
		while(dic[(tx+1)+"_"+(ty+1)]){yx++;tx++;ty++;}
		if(yx==5)return true;
		return false;
	};

	for(var i=0;i<blocks.length;i++){
	    blocks[i].onclick=function(){
	    	if(this.hasAttribute("hasColor")){return;}
	    	var id=this.getAttribute("id"); 
    		if(kaiguan){
    			this.style.background="white";kaiguan=false;
    			this.style.boxShadow = '1px 3px 10px black';
    			this.style.webkitTransform="scale(0.8,0.8)";
    			dict1[this.getAttribute("id")]=true;
    			if(panduan(id,dict1)){alert("白色赢了！"); location.reload();};
    			//dict1{}-->{0_0:true;1_1:true}
    			console.log(dict1);
    			
    		}else{
    			this.style.background="black";kaiguan=true;
    			this.style.boxShadow = '1px 3px 10px black';
    			this.style.webkitTransform="scale(0.8,0.8)";
    			dict2[this.getAttribute("id")]=true;
    			if(panduan(id,dict2)){alert("黑色赢了！");location.reload();};
    			//dict2{}-->{3_2:true;9_1:true}
    		}
    		this.setAttribute("hasColor","true");	
		};
	}





	

}