function showtime(){
    const date = new Date();
    return date.getHours()+ "Hrs:" +date.getMinutes+"MIns:"+ date.getSeconds+"Secs:";
}

function showSessionExpire(){
    console.log("Activity-B: Your session expired at"+showtime());
}

console.log("Activity-A: Triggering Activity-B at"+showtime());
setTimeout(showSessionExpire,5000);
console.log("Activity-A: Triggering Activity-B at"+showtime()+"will execute after 5 seconds");