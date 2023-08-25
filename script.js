let btn=document.getElementsByTagName("input")[0];
let colorSelect=document.querySelector("#colorSelect");
let call=function(){
	colorSelect.remove();
}

btn.addEventListener("click",call);

