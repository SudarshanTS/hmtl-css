var count=0;
var caught=false;
var modal = document.getElementById('relation');
var span = document.getElementsByClassName("close")[0];
function resultDisplay() {
	var firstpersonStore=document.getElementById('firstPerson').value;
	var secondpersonStore=document.getElementById('secondPerson').value;
	firstpersonStore=firstpersonStore.replace(/\s+/g, '');
    secondpersonStore=secondpersonStore.replace(/\s+/g, '');
	firstpersonStore =firstpersonStore.toLowerCase();
	secondpersonStore =secondpersonStore.toLowerCase();
	var bi=firstpersonStore;
	console.log(firstpersonStore.length);
	console.log(secondpersonStore.length);
		if(firstpersonStore.length === 0 ||secondpersonStore.length === 0){
			 document.getElementById("relationship").innerHTML="Please Fill The Names";
	    	 document.getElementById("relationship").style.color='red';                  
	    	 modal.style.display = "block";
		}    
	else if(firstpersonStore===secondpersonStore){
    	 document.getElementById("relationship").innerHTML="Cannot Be Same Name";
    	 document.getElementById("relationship").style.color='red';                  
    	 modal.style.display = "block";
    }
    else{
     document.getElementById("demo").innerHTML="FirstPerson:"+" "+firstpersonStore+"<br>"+"SecondPerson:"+" "+secondpersonStore;	 
     for(var i=0;i<=firstpersonStore.length;i++){
   	 for(var j=0;j<=secondpersonStore.length-1;j++){
   	  	 if(firstpersonStore[i]===secondpersonStore[j]){
   	  	 	    caught=true;
    	 	     if(caught){
  
   	  	 	    	
   	  	 	    	var match=secondpersonStore.indexOf(secondpersonStore[j])
   	  	 	    	
   	  	 	    	count++;
   	  	 	    	var remove=" ";
   	  	 	    	 var firstmatch=firstpersonStore.indexOf(firstpersonStore[i]);
   	  	 	    	 bi=bi.replace(firstpersonStore[firstmatch], "");
   	  	 	    	 var secondpersonStore=secondpersonStore.replace(secondpersonStore[match], "");
   	  	 	   }
   	  	         break;
   	  	    }
   	  }
   }
  firstpersonStore=bi;
  var totalLength=firstpersonStore.length+secondpersonStore.length;
  console.log(totalLength);
  calculateFlames(totalLength);
  }
}
function calculateFlames(len){
	var stp=1
    var ar=['f','l','a','m','e','s'];
	for(var x=6; x>1; x--){
    var g=((len%x)+stp)-1;
    if(g>x)
    {
            g=g%x;
    }
    if(g==0)
    {
            g=ar.length;
    }
    ar.splice(g-1,1);
    stp=g;
   }
                   if(ar=="f")
                    {
                           
							document.getElementById("relationship").innerHTML = 'FRIENDS';
							document.getElementById("relationship").style.color='blue';
							modal.style.display = "block";
							document.getElementById("image").innerHTML = '<img src="friends.jpg" style="width: 119px">';

                    }
                    else if(ar=="l")
                    {
                           
							document.getElementById("relationship").innerHTML = 'LOVER';
							document.getElementById("relationship").style.color='#FF0080';
							modal.style.display = "block";
							document.getElementById("image").innerHTML = '<img src="love.jpg" style="width: 119px">';
                    }
                    else if(ar=="a")
                    {
                           
							document.getElementById("relationship").innerHTML = 'AFFECTION';
							document.getElementById("relationship").style.color='#DBA901';

							modal.style.display = "block";
							document.getElementById("image").innerHTML = '<img src="affection.jpg" style="width: 119px">';
                    } 
                    else if(ar=="m")
                    {
                           
							document.getElementById("relationship").innerHTML = 'MARRIAGE';
							document.getElementById("relationship").style.color='green';
							modal.style.display = "block";
							document.getElementById("image").innerHTML = '<img src="marriage.jpg" style="width: 119px">';
                    }
                    else if(ar=="e")
                    {	
                           
							document.getElementById("relationship").innerHTML = 'ENEMY';
							document.getElementById("relationship").style.color='red';
							modal.style.display = "block";
							document.getElementById("image").innerHTML = '<img src="enemy.jpg" style="width: 119px">';
                    }
                    else if(ar=="s")
                    {
                           
							document.getElementById("relationship").innerHTML = 'SISTER';
							document.getElementById("relationship").style.color='violet';
							modal.style.display = "block";
							document.getElementById("image").innerHTML = '<img src="sister.jpg">';
                    }      
}
span.onclick = function() {
    modal.style.display = "none";
}
     

