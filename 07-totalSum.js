function totalSum(number){
    let total = 0;
    for (let i = 1; i <= number; i++) {
        total += i;
    }

    return total;
}

console.log(totalSum(5));
console.log(totalSum(4));