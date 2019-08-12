const age = 27;

let counter = 0;
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

console.log('\n');

for (let counter = 0; counter < 1000; counter += 2) {
    if (counter % age === 0) {
        console.log('counter', counter);
    }
    counter++;
}