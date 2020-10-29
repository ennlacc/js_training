function toSeconds(hours, minutes){
    let minToSec = minutes * 60;
    let hoursToSec = hours * 60 * 60;
        
    return minToSec + hoursToSec;
}

console.log(toSeconds(2, 5));
console.log(toSeconds(1, 0));