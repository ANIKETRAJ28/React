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

console.log(makeItalics(makeUpperCase(repeatChar(removeSpace(str)))));

const func = [str, removeSpace, repeatChar, makeUpperCase, makeItalics];
let res = func.reduce((prevAns, currFunc) => {
    // console.log(prevAns, currFunc);
    return currFunc(prevAns);
});
console.log(res);