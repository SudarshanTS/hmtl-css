  var elem = document.getElementById("myBar");   
  var out=document.getElementById("myProgress");
   elem.style.background="red";
   setInterval(call, 100);
    var height=0;
     function call(){
     elem.style.background==="pink"?elem.style.background="red":"";
      //out.setAttribute("class","rotate");
     if (height === 50){ 
         elem.style.background="green"
         setTimeout(call,2000);
         height=51;
        
     }
      else if(height ===100){
        elem.style.background="pink";
        setTimeout(call,2000);
        height=0;
        
      }
    else{
      height++; 
      elem.style.height = height +'%';
      elem.innerHTML=height; 
       } 
    }
