let arr = [1,2,3,4,5,6,7,8,9];
let target = parseInt(prompt("Nhập vào số nguyên cần tìm kiếm:"));
function find_pair(arr, target) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    if (pairs.length > 0) {
        return pairs[0];
    } else {
        return null;
    }
}
console.log(`Mảng đã khai báo là: ${arr}`);
console.log(`Số cần tìm kiếm là: ${target}`);
let pair = find_pair(arr, target);
if (pair !== null) {
    console.log(`Cặp số trong mảng có tổng bằng ${target} là: ${pair}`);
} else {
    console.log(`Không tìm thấy cặp số nào trong mảng có tổng bằng ${target}.`);
}