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
### 3. justify-content: Thuộc tính này điều chỉnh căn chỉnh ngang của các phần tử con bên trong phần tử cha. Bạn có thể sử dụng các giá trị như flex-start, flex-end, center, space-between, space-around và space-evenly. Ví dụ:
```
.container {
  justify-content: center;
}
```
### 4. align-items: Thuộc tính này điều chỉnh căn chỉnh dọc của các phần tử con bên trong phần tử cha. Bạn có thể sử dụng các giá trị như flex-start, flex-end, center, baseline và stretch. Ví dụ:
```
.container {
  align-items: center;
}
```
