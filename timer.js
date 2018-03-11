
 const timeParts={
    minutes:1,
    seconds:0,
    intervalID:null,
    temp:0,
    oneSecond:1000,
    };

window.onload = function () {        

   const timeElement=document.querySelector('#time');
   const startButton=document.querySelector('#start');
   const stopButton=document.querySelector('#stop');
   const timerBlock=document.querySelector('#timer');

    document.getElementById("start").onclick=function(){
        document.getElementById("start").disabled = true;
         intervalID=setInterval(function(){
         
            if(timeParts.seconds===0 && timeParts.minutes!==0){
                timeParts.seconds=59;
                timeParts.minutes--;
            }else if(timeParts.seconds!==0) {
                 timeParts.seconds--;
            }else{
                timerBlock.style.backgroundColor="#90EE90";
                startButton.style.backgroundColor="#90EE90";
                stopButton.style.backgroundColor="#90EE90";
            }

            temp=(timeParts.minutes<10)?"0"+timeParts.minutes+":":timeParts.minutes+":";
           // temp=(timeParts.minutes<10)?'0${timeParts.minutes} :':'${timeParts.minutes} :';
            temp+=(timeParts.seconds<10)?"0"+timeParts.seconds:timeParts.seconds;
                
            timeElement.innerHTML=temp;
            startButton.innerHTML="RESUME";
                               
    },timeParts.oneSecond)  
        };

            document.getElementsByClassName("stop").onclick=function(){
            document.getElementsByClassName("start").disabled=false;
            clearInterval(intervalID);
        };   
}