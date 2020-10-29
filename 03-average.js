let test1 = [2, 2, 5, 8];
let test2 = [59, 60, 40];

function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

console.log(average(test1));
console.log(average(test2));