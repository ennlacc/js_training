let test1 = [0, 7, 11, 100];
let test2 = [55, 9, 22, 11];

function differenceMinMax(array) {
    let min = max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) { max = array[i]; }
        if (array[i] < min) { min = array[i]; }
    }

    return max - min;
}

console.log(differenceMinMax(test1));
console.log(differenceMinMax(test2));