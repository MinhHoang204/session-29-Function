function timPhanTuCoDoDaiLonNhat(mang) {
    let doDaiLonNhat = 0;
    let phanTu = '';
  
    for (let i = 0; i < mang.length; i++) {
      if (mang[i].length > doDaiLonNhat) {
        doDaiLonNhat = mang[i].length;
        phanTu = mang[i];
      }
    }
  
    return phanTu;
}
  
// Khai báo một mảng các thành phần ngẫu nhiên
let mang = ['JavaScript', 'Python', 'HTML', 'CSS', 'React'];
  
// Gọi hàm và in kết quả ra màn hình
console.log(timPhanTuCoDoDaiLonNhat(mang));