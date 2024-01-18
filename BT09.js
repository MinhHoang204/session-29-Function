// Callback function là một hàm được truyền vào một hàm khác dưới dạng một đối số.
// Hàm callback sẽ được gọi từ bên trong một hàm khác, và chúng ta gọi hàm nhận hàng callback dưới dạng đối số là hàm bậc cao hơn (higher-order function).
// Callback thường được sử dụng trong các tình huống xử lí bất đồng bộ như dọc file, gửi request lên server, xử lí animation.
// Cách hoạt động của callback function như sau:
// Một hàm hỗ trợ callback function sẽ gọi đến hàm callback đó sau khi thực thi xong.