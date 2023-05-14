## media queries
![image](https://github.com/dathalongbay/react-t2/assets/6966136/192cab28-cfdd-4052-a61c-514574719d6a)

![image](https://github.com/dathalongbay/react-t2/assets/6966136/56c8af97-9914-4089-816b-8f050af10671)

### 1.Định nghĩa Media Query:
CSS Media Query là một công cụ mạnh mẽ cho phép bạn áp dụng các quy tắc CSS khác nhau dựa trên các điều kiện cụ thể của trình duyệt hoặc thiết bị. Điều này giúp bạn tạo ra các trang web đáp ứng và tối ưu hóa trải nghiệm người dùng trên các thiết bị khác nhau.
### 2.Cú pháp cơ bản:
![image](https://github.com/dathalongbay/react-t2/assets/6966136/66d3f03d-affd-4c55-ad35-3f799edcb4f0)

Media Query được sử dụng bằng cách sử dụng at-rules @media. Dưới đây là cú pháp cơ bản:
```
@media media-type and (media-feature) {
  /* Quy tắc CSS áp dụng cho điều kiện media query */
}
```
Trong đó:  
`media-type` là loại phương tiện, ví dụ như `screen`, `print`,`all`,...
`media-feature` là các thuộc tính hoặc điều kiện để xác định quy tắc CSS sẽ áp dụng, ví dụ như `width`, `max-width`, `orientation`,...
### 3.Ví dụ sử dụng Media Query:
Dưới đây là một ví dụ về cách sử dụng Media Query để thay đổi màu nền của một phần tử khi chiều rộng của trình duyệt nhỏ hơn hoặc bằng 600px:
```
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```
Trong ví dụ này, nếu chiều rộng của trình duyệt nhỏ hơn hoặc bằng 600px, quy tắc CSS trong phạm vi media query sẽ được áp dụng, và màu nền của phần tử `<body>` sẽ là lightblue.

### 4.Các media feature phổ biến:
Dưới đây là một số media feature phổ biến mà bạn có thể sử dụng trong CSS Media Query:

width: Chiều rộng của trình duyệt hoặc thiết bị.  
height: Chiều cao của trình duyệt hoặc thiết bị.  
min-width và max-width: Giá trị tối thiểu và tối đa cho chiều rộng.  
min-height và max-height: Giá trị tối thiểu và tối đa cho chiều cao.  
orientation: Hướng của thiết bị (ngang hoặc dọc).  
aspect-ratio: Tỷ lệ khung hình (chiều rộng / chiều cao). 
### 5.Kết hợp điều kiện:
Bạn cũng có thể kết hợp nhiều điều kiện trong CSS Media Query bằng cách sử dụng các toán tử logic như and và or. Ví dụ:
```
@media (max-width: 600px) and (orientation: landscape) {
  /* Quy tắc CSS áp dụng khi chiều rộng nhỏ hơn hoặc bằng 600px và hướng là ngang */
}

@media (min-width: 768px), print {
  /* Quy tắc CSS áp dụng khi chiều rộng lớn hơn hoặc bằng 768px hoặc trang in */
}
```
Trong ví dụ đầu tiên, quy tắc CSS chỉ áp dụng khi chiều rộng nhỏ hơn hoặc bằng 600px và hướng là ngang. Trong ví dụ thứ hai, quy tắc CSS áp dụng khi chiều rộng lớn hơn hoặc bằng 768px hoặc trang in.

### 6.Phạm vi mặc định:
Khi sử dụng CSS Media Query, nếu không chỉ định media type, nó sẽ áp dụng cho tất cả các phương tiện. Ví dụ:
```
@media (max-width: 600px) {
  /* Quy tắc CSS áp dụng khi chiều rộng nhỏ hơn hoặc bằng 600px cho tất cả các phương tiện */
}
```
### 7.Thứ tự ưu tiên:
Khi sử dụng nhiều Media Query, thứ tự khai báo là quan trọng. Quy tắc được áp dụng dựa trên thứ tự đầu tiên phù hợp. Ví dụ:

```
@media (min-width: 768px) {
  /* Quy tắc A */
}

@media (max-width: 600px) {
  /* Quy tắc B */
}
```
Trong ví dụ này, nếu chiều rộng là 500px, quy tắc B sẽ được áp dụng vì nó 500px phù hợp với quy tắc B.

### Chúng ta sẽ chuyển qua các ví dụ cho dễ hiểu hơn nhé 
Chúng ta quan sát hình ảnh sau :   

![image](https://github.com/dathalongbay/react-t2/assets/6966136/7866abe1-c8a4-4c17-8c27-807bdcb72caa)

Mã html sẽ là :   
```
<div class="my-element">
  my element
</div>
```  
Mã css sẽ là :  

```
.my-element {
    background: green;
    color: white;
    width: 200px;
    height: 200px;
    font-size: 24px;
  text-align: center;
  line-height: 200px;
 }

@media (max-width: 768px) {
  .my-element {
    background: #4F46E5;
  }
}
```  
Đoạn mã sau sẽ biến màu nền của thẻ .my-element thành màu #4F46E5 khi màn hình nhỏ hơn 768px

![image](https://github.com/dathalongbay/react-t2/assets/6966136/ec37c47b-7266-40b1-a420-849aad1e33f9)





