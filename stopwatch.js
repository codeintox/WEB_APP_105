var hr = 0;
var mn = 0;
var sec = 0;
var count = 0;
var timer = false;

function start(){
    timer = true;
    stopWatch();
}
function stop(){
    timer = false;

}
function reset(){
    timer = false; 
    
    hr = 0;
    mn = 0;
    sec = 0;
    count = 0;
    
    document.getElementById('hour').innerHTML = '00';
    document.getElementById('minit').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('count').innerHTML = '00';
}

function stopWatch(){
    
    if(timer == true)
    count = count+1;
    
    if(count == 100){
        sec = sec+1;
        count = 0;
    }
    if(sec == 60){
        mn = mn+1;
        sec = 0;
    }
    if(mn == 60){
        hr = hr + 1;
        mn = 0;
        sec = 0;
    }
    let hrString = hr;
    let minString = mn;
    let secString = sec;
    let countString = count;
    
    if(hr < 10){
        hrString = "0"+hrString;
    }
    if(mn < 10){
        minString = "0"+minString;
    }
    if(sec < 10){
        secString = "0"+secString;
    }
    if(count < 10){
        countString = "0"+countString;
    }
    
    document.getElementById('hour').innerHTML = hrString;
    document.getElementById('minit').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;
    document.getElementById('count').innerHTML = countString;
    setTimeout("stopWatch()", 10);
}