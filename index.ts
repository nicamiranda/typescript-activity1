let str:string = "Cat30";
let newstr:string = "";
let newchar:string = "";

export const changeitUp = (str:string) => {
    for (let i=0; i<str.length; i++) {
        if (str.charAt(i) === 'Z' || str.charAt(i) === 'z' ) {
            newstr += str.charAt(i).replace(str.charAt(i), 'A');
        } else if (str.charAt(i).match(/[0-9]/)) {
            newstr += str.charAt(i);
        } else {
            newchar = (String.fromCharCode(str.charCodeAt(i) + 1));
                if (newchar.match(/[a-z]*[aeiou][a-z]*/i)) {
                    newstr += newchar.toUpperCase();
                } else {
                    newstr += newchar.toLowerCase();
                }
        }
    }
    return newstr;
}
console.log(changeitUp(str));


