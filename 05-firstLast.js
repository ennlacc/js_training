let test1 = [1, 2, 5, 8];
let test2 = [5, 5, 8];

function firstLast(array) {
    let newArray = [];

    newArray[0] = array[0];
    newArray[1] = array.pop();

    return newArray;
}

console.log(firstLast(test1));
console.log(firstLast(test2));