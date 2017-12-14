let numbersArray = [2, 4, 6, 7, 23, 92, 1, 10];

function evenNumbers(array) {
    return array.filter(number => {
        return number % 2 === 0;
    })
}
