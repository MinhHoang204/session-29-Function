let str1 = "hello, world!";
let str2 = prompt("Nhập vào chuỗi cần kiểm tra:");
function check_string(str1, str2) {
    for (let i = 0; i < str2.length; i++) {
        if (str1.indexOf(str2[i]) === -1) {
            return false;
        }
    }
    return true;
}
console.log(`Chuỗi đã khai báo là: ${str1}`);
console.log(`Chuỗi cần kiểm tra là: ${str2}`);
console.log(`Kết quả kiểm tra là: ${check_string(str1, str2)}`);