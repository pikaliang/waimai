window.onload=function(){
    resize(1080,"x");
};
function resize(originSize,type){
    // originSize = 750;
    // type = x
    type = type || "x";
    if(type=="x"){
        let width = document.documentElement.clientWidth;//设备的宽度
        let scale = width/originSize*100+"px";
        document.getElementsByTagName("html")[0].style.fontSize=scale;
    }else if(type=="y"){
        let height = document.documentElement.clientHeight;
        let scale = height/originSize+"px";
        document.getElementsByTagName("html")[0].style.fontSize=scale;
    }
}
resize(1080,"x");

window.onresize = function(){
    resize(1080,"x");
};