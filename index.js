"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeitUp = void 0;
let str = "Cat30";
let newstr = "";
let newchar = "";
const changeitUp = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'Z' || str.charAt(i) === 'z') {
            newstr += str.charAt(i).replace(str.charAt(i), 'A');
        }
        else if (str.charAt(i).match(/[0-9]/)) {
            newstr += str.charAt(i);
        }
        else {
            newchar = (String.fromCharCode(str.charCodeAt(i) + 1));
            if (newchar.match(/[a-z]*[aeiou][a-z]*/i)) {
                newstr += newchar.toUpperCase();
            }
            else {
                newstr += newchar.toLowerCase();
            }
        }
    }
    return newstr;
};
exports.changeitUp = changeitUp;
console.log((0, exports.changeitUp)(str));
