let count = 0;

// if click decrease button count -1 
document.getElementById("decreaseBtn").onclick = function(){
    count -=1;
    document.getElementById("countLabel").innerHTML = count;
}

// if click reset button count 0
document.getElementById("resetBtn").onclick = function(){
    count  = 0;
    document.getElementById("countLabel").innerHTML = count;
}

// if click increase button count +1 
document.getElementById("increaseBtn").onclick = function(){
    count +=1;
    document.getElementById("countLabel").innerHTML = count;

}