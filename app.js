let numbersArray = [2, 4, 6, 7, 23, 92, 1, 10];

function evenNumbers(array) {
    return array.filter(number => {
        return number % 2 === 0;
    })
}

evenNumbers(numbersArray);

let ageArray = [{
    name: 'Amber',
    age: '28'
}, {
    name: 'Paul',
    age: '24'
}, {
    name: 'Dumbledor',
    age: '?'
}];

function sum(array) {
    let total = 0
    array.map(item => {
        total += item;
    });
    return total;
}

sum(numbersArray);
