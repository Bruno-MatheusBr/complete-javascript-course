'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven';
            const str = `Oh, you are a millenial, ${firstName}!`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
            output = 'New output';
        }
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Bruno Matheus';
calcAge(1991);
