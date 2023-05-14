Flexbox là một phương pháp bố trí trong CSS cho phần tử con bên trong một phần tử cha, cho phép bạn tạo ra các bố cục linh hoạt và dễ dàng điều chỉnh. Có một số thuộc tính quan trọng của flexbox mà bạn có thể sử dụng để tùy chỉnh việc sắp xếp và căn chỉnh các phần tử con. Dưới đây là một số thuộc tính cơ bản của flexbox:
### 1. display: Để bắt đầu sử dụng flexbox, bạn cần thiết lập thuộc tính display của phần tử cha thành flex. Ví dụ:
```
.container {
  display: flex;
}
```
### 2. flex-direction: Điều này xác định hướng chính của các phần tử con bên trong phần tử cha. Các giá trị phổ biến bao gồm row (mặc định), column, row-reverse và column-reverse. Ví dụ:
```
.container {
  flex-direction: row;
}
```
