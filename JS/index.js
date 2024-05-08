function positiveNumbers(numbers){
    console.log(numbers);
    const posNum = numbers.filter(number=> number > 0)
    return posNum;
}
console.log(positiveNumbers([1,4,-7,-3,8]));