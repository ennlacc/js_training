let test1 = [1, 2, 5, 8];
let test2 = ["Lee", "Bruce"];

function reverseArray(array) {
    let newArray = [];
    let counter = 0;
    for (let i = array.length; i >= 0; i--) {
        newArray[counter] = array[i];
        counter++;
    }
    return newArray;
}

console.log(reverseArray(test1));
console.log(reverseArray(test2));