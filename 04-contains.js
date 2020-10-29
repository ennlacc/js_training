let test1 = [1, 2, 3, 4];
let test2 = [2, 2, 4];

function contains(array, number) {
    let cont = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            cont = true;
            break;
        }
    }

    return cont;
}

console.log(contains(test1, 3));
console.log(contains(test2, 3));