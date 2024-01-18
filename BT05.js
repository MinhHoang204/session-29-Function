let arr = ["Hello, world!", "Goodbye, world!", "Welcome to the world!"];
let str = prompt("Nhap vao chuoi can tim kiem");
function find_strings(arr, str) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(str)) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(`Mảng đã khai báo là: ${arr}`);
console.log(`Chuỗi cần tìm kiếm là: ${str}`);
console.log(`Các phần tử trong mảng có chứa chuỗi là: ${find_strings(arr, str)}`);