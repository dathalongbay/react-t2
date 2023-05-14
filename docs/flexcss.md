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
### 5. flex-grow: Thuộc tính này xác định tỷ lệ mà các phần tử con phát triển trong phần tử cha. Nó nhận giá trị số, mặc định là 0. Ví dụ:
```
.item {
  flex-grow: 1;
}
```
### 6. flex-shrink: Thuộc tính này xác định tỷ lệ mà các phần tử con co lại trong phần tử cha khi không có không gian đủ. Nó nhận giá trị số, mặc định là 1. Ví dụ:
```
.item {
  flex-shrink: 0;
}
```
### 7. flex-basis: Thuộc tính này xác định kích thước ban đầu của một phần tử con trước khi phân bổ không gian dư thừa. Ví dụ:
```
.item {
  flex-basis: 200px
} 
```
### 8. flex: Thuộc tính flex là một cách ngắn gọn để đặt giá trị cho các thuộc tính flex-grow, flex-shrink và flex-basis cùng một lúc. Cú pháp của thuộc tính flex là `<flex-grow> <flex-shrink> <flex-basis>`. Ví dụ:
 ```
.item {
  flex: 1 0 200px;
}
 ```
### 9. align-self: Thuộc tính này điều chỉnh căn chỉnh dọc của một phần tử con cụ thể bên trong phần tử cha, ghi đè lên giá trị của align-items. Bạn có thể sử dụng các giá trị như flex-start, flex-end, center, baseline và stretch. Ví dụ:
```
.item {
  align-self: flex-end;
}
 ```
 ### 10. order: Thuộc tính này xác định thứ tự hiển thị của các phần tử con bên trong phần tử cha. Mặc định, các phần tử con có giá trị order bằng 0 và sẽ được hiển thị theo thứ tự xuất hiện trong mã HTML. Bạn có thể sử dụng các số âm hoặc dương để xác định thứ tự tương đối của các phần tử con. Ví dụ:
```
.item {
  order: 1;
}
```
### 11. flex-wrap: Thuộc tính này xác định xem liệu các phần tử con có nên xuống dòng hay không khi không có đủ không gian ngang trong phần tử cha. Các giá trị phổ biến là nowrap (mặc định), wrap và wrap-reverse. Ví dụ:
```
.container {
  flex-wrap: wrap;
}
```
