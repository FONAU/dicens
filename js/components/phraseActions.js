var COPY_TIMEOUT = 2000;

var actionCopy = function(target){
    var blockquote = target.parentNode.parentNode;
    var phrase = blockquote.getElementsByTagName("P")[0].innerText;
    target.getElementsByTagName("P")[0].innerText = "¡Copiado!";
    navigator.clipboard.writeText(phrase);
    setTimeout(function(){
        target.getElementsByTagName("P")[0].innerText = "Copiar";
    }, COPY_TIMEOUT, target);
};

var actionTwit = function(){

};

var phraseAction = function(e){
    var target = e.target;
    if(e.target.classList.contains("phrase-action")){
        var action = target.dataset.action;
        if(action == "copy"){
            actionCopy(target);
        }
        if(action == "twit"){
            actionTwit(target);
        }
    }
};
document.addEventListener("click", phraseAction, false);