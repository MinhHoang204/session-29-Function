function kiemTraChanLe(so) {
    if (so % 2 === 0) {
      return `${so} là số chẵn`;
    } else {
      return `${so} là số lẻ`;
    }
  }
  
function main() {
    // Khai báo 3 số ngẫu nhiên
    let so1 = Math.floor(Math.random() * 100);
    let so2 = Math.floor(Math.random() * 100);
    let so3 = Math.floor(Math.random() * 100);
  
    // Gọi hàm kiểm tra chẵn lẻ và in kết quả ra màn hình console
    console.log(kiemTraChanLe(so1));
    console.log(kiemTraChanLe(so2));
    console.log(kiemTraChanLe(so3));
  }