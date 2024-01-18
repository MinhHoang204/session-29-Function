let str = prompt("Nhap vao chuoi");
let char = prompt("Nhap vao ki tu can dem");
function count_characters(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(`Chuỗi đã nhập là: ${str}`);
console.log(`Ký tự cần đếm là: ${char}`);
console.log(`Số lần xuất hiện của ký tự ${char} trong chuỗi là: ${count_characters(str, char)}`);