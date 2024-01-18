let str = "hello, world!";
function capitalize_first_letter(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}
console.log(`Chuỗi đã khai báo là: ${str}`);
console.log(`Chuỗi sau khi viết hoa chữ cái đầu là: ${capitalize_first_letter(str)}`);