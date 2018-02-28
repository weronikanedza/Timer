
var minutes=1;
var seconds=0;
var temp;
var intervalID;
window.onload = function () {
    document.getElementById("start").onclick=function(){
        intervalID=setInterval(function(){
         
            if(seconds==0 && minutes!=0){
                seconds=59;
                minutes--;
            }else if(seconds!=0) {
                 seconds--;
            }else{
                document.getElementById("timer").style.backgroundColor="#90EE90";
                document.getElementById("start").style.backgroundColor="#90EE90";
                document.getElementById("stop").style.backgroundColor="#90EE90";
            }

            temp=(minutes<10)?"0"+minutes+":":minutes+":";
            temp+=(seconds<10)?"0"+seconds:seconds;
                
            document.getElementById("time").innerHTML=temp;
            document.getElementById("start").innerHTML="RESUME";
                               
    },1000)  
        };

       document.getElementById("stop").onclick=function(){
        clearInterval(intervalID);
       };
}