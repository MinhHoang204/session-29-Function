let arr = [1, -2, 3, 4, -5, 8, -3];
function find_max_subarray(arr) {
    let max_sum = arr[0];
    let current_sum = arr[0];
    let start_index = 0;
    let end_index = 0;
    let current_start_index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (current_sum + arr[i] > arr[i]) {
            current_sum += arr[i];
        } else {
            current_sum = arr[i];
            current_start_index = i;
        }
        if (current_sum > max_sum) {
            max_sum = current_sum;
            start_index = current_start_index;
            end_index = i;
        }
    }
    return arr.slice(start_index, end_index + 1);
}
console.log(`Mảng đã khai báo là: ${arr}`);
console.log(`Mảng con có tổng các phần tử lớn nhất là: ${find_max_subarray(arr)}`);