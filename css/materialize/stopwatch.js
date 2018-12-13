var secondValue=document.getElementById("Seconds");
var timestampValue=document.getElementById("timeStamp");
var hh="00";
var mm="00";
var ss="00";
var ns="00";
var secondCount=0;
var tempMin=0;
timestampValue.innerHTML=hh+":"+mm+":"+ss+":"+ns;
secondValue.innerHTML="0";
var playButton=document.getElementById("playPauseIcon");
const playIcon='play_arrow';
const pauseIcon ='pause';
function play(flag) {
        if(flag==1){
		   hh="00";
		   mm="00";
		   ss="00";
		   ns="00";
		   secondCount=0;
        }
        ++ns;
	    ns=checkTime(ns);
    if(ns=="90"){
		++ss;
		ns="00";
		secondCount++;
	}
   if(ss=="60"){
      	++mm;
      	 tempMin++;  
   	    mm=checkTime(mm);
        ss=0;
   }
   if(tempMin==60){
   	hh++;
   	tempMin=0;
   	hh=checkTime(hh);
   	
   }
   timestampValue.innerHTML=hh+":"+mm+":"+ss+":"+ns;
   secondValue.innerHTML=secondCount;
   Timer=setTimeout(play,15);
   flag++;
   playButton.setAttribute("onclick","pause()");
   playButton.innerHTML=pauseIcon;	
   
}
function pause(){
	clearTimeout(Timer);
	playButton.innerHTML=playIcon;	
    playButton.setAttribute("onclick","play()");
}

function checkTime(i){
    	if(i<10){
    		i="0"+i;
    	}
    	return i;
    }
function reset(){
    secondValue.innerHTML="0";
  timestampValue.innerHTML="00:00:00:00"
  clearTimeout(Timer);
  playButton.innerHTML=playIcon;	
  playButton.setAttribute("onclick","play(1)");
}