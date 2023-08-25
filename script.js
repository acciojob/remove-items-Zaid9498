let btn=document.getElementsByTagName("input")[0];
let colorSelect=document.getElementById("colorSelect");
let call=function(){
	colorSelect.remove();
}

btn.addEventListener("click",call);

