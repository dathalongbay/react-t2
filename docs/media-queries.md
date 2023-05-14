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
