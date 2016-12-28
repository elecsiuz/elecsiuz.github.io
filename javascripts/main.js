document.addEventListener('DOMContentLoaded',function(){
     maininit();},false);

function aT_b(){
    var atags = document.querySelectorAll('a');
    for(var j=0;j<atags.length;j++){
        atags[j].target = "_blank";
    }
}
function maininit(){
    aT_b();
}