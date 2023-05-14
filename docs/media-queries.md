## media queries
### 1.Định nghĩa Media Query:
CSS Media Query là một công cụ mạnh mẽ cho phép bạn áp dụng các quy tắc CSS khác nhau dựa trên các điều kiện cụ thể của trình duyệt hoặc thiết bị. Điều này giúp bạn tạo ra các trang web đáp ứng và tối ưu hóa trải nghiệm người dùng trên các thiết bị khác nhau.
### 2.Cú pháp cơ bản:
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

