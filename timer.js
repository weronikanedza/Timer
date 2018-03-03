
 const timeParts={
    minutes:1,
    seconds:0,
    intervalID:null,
    };

window.onload = function () {        

    document.getElementById("start").onclick=function(){
        document.getElementById("start").disabled = true;
         intervalID=setInterval(function(){
         
            if(timeParts.seconds===0 && timeParts.minutes!==0){
                timeParts.seconds=59;
                timeParts.minutes--;
            }else if(timeParts.seconds!==0) {
                 timeParts.seconds--;
            }else{
                document.getElementsByClassName("timer").style.backgroundColor="#90EE90";
                document.getElementById("start").style.backgroundColor="#90EE90";
                document.getElementById("stop").style.backgroundColor="#90EE90";
            }

            var temp=(timeParts.minutes<10)?"0"+timeParts.minutes+":":timeParts.minutes+":";
            temp+=(timeParts.seconds<10)?"0"+timeParts.seconds:timeParts.seconds;
                
            document.getElementById("time").innerHTML=temp;
            document.getElementById("start").innerHTML="RESUME";
                               
    },1000)  
        };

        document.getElementById("stop").onclick=function(){
        document.getElementById("start").disabled = false;
        clearInterval(intervalID);
       };
}