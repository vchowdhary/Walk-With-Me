// JavaScript Document
function changeTips(){
	var i = 0;
	while(document.getElementById("start-button").clicked === false){
		var tips = ["hi", "get rekt"];
		var text = document.getElementById("tips").innerHTML;
		text = tips[i];
		window.setTimeout(changeTips(), 1000);
		i++;
		if (i>tips.length){
			i = 0;	
		}
	}
}
changeTips();