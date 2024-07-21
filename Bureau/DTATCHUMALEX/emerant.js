const Addeventoneles=function(elses,type,callback){
if(elses.length>1){
    for(let i=0;i<elses.length;i++){
        elses[i].addeventoneles(type,callback);
    }
}else{
elses.Addeventoneles(type,callback);
}
}
const navbar=document.querySelector("[data-navbar]");
const navtogglers=document.querySelectorall("[data-nav-toggler]");
const navlink=document.querySelector("[data-nav-link]");
Addeventoneles(navtoggler,"click",togglernavbar);
const closenavbar=function(){
navbar.classList.remove(active);
overlay.classList.remove(active);
}