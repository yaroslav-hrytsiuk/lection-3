// const age = 27;

// let counter = 0;
/*while (counter < 1000) {
    if (counter % age === 0) {
        console.log('counter', counter);
    }
    counter++;
}

console.log('do while');
counter = 0;
do {
    if (counter % age === 0) {
        console.log('counter', counter);
    }
    counter++;
} while (counter < 1000);*/

// for (let counter = 0; counter < 1000; counter += 2) {
//     if (counter % age === 0) {
//         console.log('counter', counter);
//     }
//     counter++;
// }



// function square (side, height) {
//     const area = 0.5*side*height;
//     return area;

// }
// console.log(square(3, 4));
// square(3543, 2);
// square(2, 425);



// function showArea () {
//     const area1 = square(3, 4);
//     console.log('Area of the triangle -', area1)
// }
// showArea();


// function sumFromTo(from, to) {
//     if (from && to && !isNaN(from) && !isNaN(to)) {
//         let sum = 0;
//         for (let counter = from; counter <= to; counter++) {
//             sum += counter;
//         }
//         return sum;
//     } else {
//         return 'something going wrong'
//     }
// }

// console.log(sumFromTo('3', 6));

function createList (list) {
    for (let counter = 0; counter < list.length; counter++) {
        const firstLetter = list[counter][0].toUpperCase();
        console.log(firstLetter + list[counter].substr(1));
    }
}

const secondList = ['Пиво', 'Чіпси', 'Горішки'];

createList (secondList);