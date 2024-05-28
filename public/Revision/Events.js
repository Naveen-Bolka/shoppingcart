function showCards1() {
       const element=document.querySelector(".d-flex");
       const childElements=element.children;
       let arr=document.getElementById("chevron-container3");
       for(var i=0;i<childElements.length;i++){
              var ele=childElements[i];
              if(ele.style.display=="none"){
                  arr.style.display="block";
                  ele.style.display="block";
              }
              else{
                   arr.style.display="none";
                   ele.style.display="none";
              }
       }
}

function showCards2(){
       const element=document.querySelector(".d-flex");
       const childElements=element.children;
       let arr=document.getElementById("chevron-container4");
       for(var i=0;i<childElements.length;i++){
              var pic=childElements[i];
              if(pic.style.display==="none"){
                     pic.style.display="block";
                     arr.style.display="block";
              }else{
                     pic.style.display="none";
                     arr.style.display="none";
              }
       }
}
function DisplayMenu(){
       var element=document.getElementById("menu");
       if(element.style.display==="none"){
              element.style.display="block";
       }
}

