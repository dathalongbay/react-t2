Flexbox là một phương pháp bố trí trong CSS cho phần tử con bên trong một phần tử cha, cho phép bạn tạo ra các bố cục linh hoạt và dễ dàng điều chỉnh. Có một số thuộc tính quan trọng của flexbox mà bạn có thể sử dụng để tùy chỉnh việc sắp xếp và căn chỉnh các phần tử con. Dưới đây là một số thuộc tính cơ bản của flexbox:
## Nhóm 1 áp dụng cho flex container
### 1.1. display: Để bắt đầu sử dụng flexbox, bạn cần thiết lập thuộc tính display của phần tử cha thành flex. Ví dụ:
![image](https://github.com/dathalongbay/react-t2/assets/6966136/f25b5177-60a3-4a7d-819e-c42275374a49)

```
.container {
  display: flex;
}
```
### 1.2. flex-direction: Điều này xác định hướng chính của các phần tử con bên trong phần tử cha. Các giá trị phổ biến bao gồm row (mặc định), column, row-reverse và column-reverse. Ví dụ:
![image](https://github.com/dathalongbay/react-t2/assets/6966136/41176d67-38cb-4018-aa53-9fbe92368e98)

```
.container {
  flex-direction: row;
}
```
### 1.3. flex-wrap: Thuộc tính này xác định xem liệu các phần tử con có nên xuống dòng hay không khi không có đủ không gian ngang trong phần tử cha. Các giá trị phổ biến là nowrap (mặc định), wrap và wrap-reverse. Ví dụ:
![image](https://github.com/dathalongbay/react-t2/assets/6966136/a9784458-4a4b-4ebb-b6f2-e27189ddfd75)

```
.container {
  flex-wrap: wrap;
}
```
### 1.4. flex-flow: Đây là cách viết tắt của các thuộc tính flex-direction và flex-wrap. Giá trị mặc định là row nowrap.
```
.container {
  flex-flow: column wrap;
}
```
### 1.5. justify-content: Thuộc tính này điều chỉnh căn chỉnh ngang của các phần tử con bên trong phần tử cha. Bạn có thể sử dụng các giá trị như flex-start, flex-end, center, space-between, space-around và space-evenly. Ví dụ:
![image](https://github.com/dathalongbay/react-t2/assets/6966136/b068b65e-7d7b-4ee8-9cbf-6e487b30673b)

```
.container {
  justify-content: center;
}
```
### 1.6. align-items: Thuộc tính này điều chỉnh căn chỉnh dọc của các phần tử con bên trong phần tử cha. Bạn có thể sử dụng các giá trị như flex-start, flex-end, center, baseline và stretch. Ví dụ:
![image](https://github.com/dathalongbay/react-t2/assets/6966136/91a8b24f-3a49-41a2-b364-04064b7d0feb)

```
.container {
  align-items: center;
}
```
### 1.7. align-content Căn chỉnh dọc các hàng trong flex container
align-content: stretch; - Căn chỉnh dọc của các dòng trong trường hợp không đủ không gian.

align-content: flex-start; - Căn chỉnh dọc của các dòng ở phía trên.

align-content: flex-end; - Căn chỉnh dọc của các dòng ở phía dưới.

align-content: center; - Căn chỉnh dọc của các dòng ở giữa.

align-content: space-between; - Căn chỉnh dọc của các dòng cách đều nhau, không có khoảng trống ở hai bên.

align-content: space-around; - Căn chỉnh dọc của các dòng cách đều nhau, có khoảng trống ở hai bên.

![image](https://github.com/dathalongbay/react-t2/assets/6966136/73930217-e109-4e25-a2d8-09b686319e69)

### 1.8. gap, row-gap, column-gap
![image](https://github.com/dathalongbay/react-t2/assets/6966136/3c46981d-bebe-4821-8e65-db8699816bab)

Thuộc tính khoảng cách kiểm soát rõ ràng khoảng cách giữa các flex item. Nó chỉ áp dụng khoảng cách giữa các flex item không ở các cạnh bên ngoài.
```
.container {
  display: flex;
  ...
  gap: 10px;
  gap: 10px 20px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 20px;
}
```
## Nhóm 2 áp dụng cho các flex item con 
![image](https://github.com/dathalongbay/react-t2/assets/6966136/8c16249e-f211-4ddd-8732-c880adf0e99c)
### 2.1. order: Thuộc tính này xác định thứ tự hiển thị của các phần tử con bên trong phần tử cha. Mặc định, các phần tử con có giá trị order bằng 0 và sẽ được hiển thị theo thứ tự xuất hiện trong mã HTML. Bạn có thể sử dụng các số âm hoặc dương để xác định thứ tự tương đối của các phần tử con. Ví dụ:
 ![image](https://github.com/dathalongbay/react-t2/assets/6966136/1910d742-f979-4510-889a-69868df1775b)

```
.item {
  order: 1;
}
```

### 2.1 flex-grow: Thuộc tính này xác định tỷ lệ mà các phần tử con phát triển trong phần tử cha. Nó nhận giá trị số, mặc định là 0. Ví dụ:
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
 

