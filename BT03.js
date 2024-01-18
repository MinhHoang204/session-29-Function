let str = "Hello, world!";
function count_characters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            count++;
        }
    }
    return count;
}
console.log("Chuoi da cho la:", + str);
console.log("So ky tu trong chuoi la: " + count_characters(str));