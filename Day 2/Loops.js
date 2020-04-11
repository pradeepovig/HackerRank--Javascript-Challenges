'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    let consonantsArray = [];

    s.split('').forEach(character => {
        if(vowels.includes(character.toLowerCase())) console.log(`${character}`);
        else consonantsArray.push(character);
    });

    // Now print the consonants
    consonantsArray.forEach(consonant => {
        console.log(`${consonant}`);
    });
}


function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}
