document.body.dataset.colorMode = localStorage.getItem("colorMode");

var colorModes = ["dark", "light"];
var colorSwitch = function(){
    var color = localStorage.getItem("colorMode");
    if(!color){
        color = "dark"
    }
    else{
        color = colorModes[(colorModes.indexOf(color) + 1)%colorModes.length];
    }
    localStorage.setItem("colorMode", color);
    document.body.dataset.colorMode = color;
};