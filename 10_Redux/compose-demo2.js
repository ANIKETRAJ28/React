import { compose } from 'redux'

function removeSpace(str) {
    return str.split(" ").join("");
}

function repeatChar(str) {
    return str.repeat(2);
}

function makeUpperCase(str) {
    return str.toUpperCase();
}

function makeItalics(str) {
    return str.italics();
}

let str = 'hello there how are you ?';

let composeFunc = compose(removeSpace, repeatChar, makeUpperCase, makeItalics);

console.log(composeFunc(str));

// compose method takes a bunch of functions and compose them into one chain of functions.