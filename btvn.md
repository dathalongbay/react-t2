### BTVN ngày 3 :
Các bạn cần đọc để hiểu 1 số khái niệm sau
| STT | Tên | Liên kết |
|:------------|:-------------|:-------------|
| 1      |   GIT SCM    |        https://drive.google.com/file/d/1Fh_3S4tOMmADAtmui1LesLiMcQICzuBt/view |
| 2      |    Ôn tập ul li     |          https://drive.google.com/file/d/1xQDMbnDyeQyYX_qeTTaxM9WC0GG_qvkk/view |
| 3      |    Ôn tập table     |          https://drive.google.com/file/d/1fQZDobqhDLZYFpCa51ngPVEBLuF5AETM/view |
| 4      |    Ôn tập Meta     |          https://drive.google.com/file/d/1_r_iZ-a858c-F8crzica3c6BcyGBjTEy/view |
| 5      |    Ôn tập Meta 2     |          https://drive.google.com/file/d/1ZNLV7Qtfr9snMG4YDxcswWljREr0kdv5/view |
| 6      |    Ôn tập Meta 3     |          https://drive.google.com/file/d/1ugwMP2UxCtGhBK4vtlYSE1ajtrO6gt9V/view |
| 7      |    CSS selector     |          https://drive.google.com/file/d/1aokxxvvuFaMw1Z6GZ8IeyV-ggNVTPq7B/view và https://www.w3schools.com/cssref/trysel.php |
### BTVN ngày 4 :
tạo form đăng ký đơn giản với họ tên, email, số điện thoại,sinh nhật, địa chỉ, ghi chú sử dụng css flexbox tương tự như hình ảnh sau ( chú ý không cần làm giống hệt hình ảnh chỉ cần tương tự là được ) 

![image](https://github.com/dathalongbay/react-t2/assets/6966136/42b0310a-38e9-4d65-96a6-9bfec7b0f1af)

Chú ý chỉ khi không thể làm được mới xem bài giải bên dưới :  
https://codepen.io/dathalongbay/pen/NWOBqEL 
> Cách nộp bài gửi link repo github của em về email : dathalongit@gmail.com . Tiêu đề email ghi rõ họ tên - kèm tên lớp reactjs2304. Chú ý link repo ở trạng thái public công khai
### BTVN ngày 5 :
![image](https://github.com/dathalongbay/react-t2/assets/6966136/962807d7-e471-4497-b830-1d049db0c6fc)
Em hãy sử dụng css flex. Để code 1 giao diện tương tự như hình ảnh trên. Đây là 1 giao diện một phần của youtube

Bài giải : https://codepen.io/dathalongbay/pen/KKGrxNL
> Cách nộp bài gửi link repo github của em về email : dathalongit@gmail.com . Tiêu đề email ghi rõ họ tên - kèm tên lớp reactjs2304. Chú ý link repo ở trạng thái public công khai
### BTVN ngày 6 :
https://drive.google.com/drive/folders/1XfL7xlb_5IG_i8DQKf2CSD8QxL2kZ-tI?usp=sharing
Tải xuống về máy giúp anh folder lý thuyết ở link trên cho dễ đọc và đọc trước cho anh các file từ 116 đên 153. Các file có đánh số thứ tự kèm tên file
### BTVN ngày 7 : 
https://codepen.io/dathalongbay/pen/NWOJxZE
> Cách nộp bài gửi link repo github của em về email : dathalongit@gmail.com . Tiêu đề email ghi rõ họ tên - kèm tên lớp reactjs2304. Chú ý link repo ở trạng thái public công khai
### BTVN ngày 9 : 
https://drive.google.com/drive/folders/1XfL7xlb_5IG_i8DQKf2CSD8QxL2kZ-tI?usp=sharing
Tải xuống về máy giúp anh folder lý thuyết ở link trên cho dễ đọc và đọc trước cho anh các file từ 154 đên 181. Các file có đánh số thứ tự kèm tên file
### BTVN ngày 10 :
Viết 1 hàm arrow function giải phương trình bậc 2 
Tham khảo : https://quantrimang.com/cong-nghe/cach-giai-phuong-trinh-bac-2-176425
Bài giải : 

```
const phuongTrinhBacHai = (a, b, c) => {
  const delta = b * b - 4 * a * c;
  if (delta < 0) {
    return "Phương trình vô nghiệm";
  } else if (delta === 0) {
    const x = -b / (2 * a);
    return `Phương trình có nghiệm kép x = ${x}`;
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return `Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
  }
};

// Gọi hàm 
const a = 1;
const b = -3;
const c = 2;

const result = phuongTrinhBacHai(a, b, c);
```
> Cách nộp bài gửi link repo github của em về email : dathalongit@gmail.com . Tiêu đề email ghi rõ họ tên - kèm tên lớp reactjs2304. Chú ý link repo ở trạng thái public công khai
### Bài tập về nhà 11 :
Code 1 chức năng toggle password visibility   
Demo : https://www.javascripttutorial.net/sample/dom/miniprojects/toggle-password-visibility/index.html   
Tham khảo bài giải bên dưới :   
https://www.javascripttutorial.net/javascript-dom/javascript-toggle-password-visibility/

Bài này tự làm không cần nộp lại .
### bài tập về nhà bổ sung 1 máy tính casio :
Xây dựng 1 máy tính casio đơn giản bằng js   
![image](https://github.com/dathalongbay/react-t2/assets/6966136/5c4a98e9-390f-447c-9080-891bada80c1d)
https://github.com/dathalongbay/react-t2/tree/main/docs/calculator-js    
Cách để làm bài này :     
Bước 1 : xem phần code html trong file index.html sau đó ghi nhớ id và class các thẻ     
Bước 2 : tự code lại nội dung file html    
Bước 3 : có thể copy phần css vào bài làm của mình cho nhanh hoặc tự code css cho bài làm của mình 
Bước 4 : tự code phần js cho bài này . Nếu khó quá không làm được thì xem file script.js có comment đầy đủ giải thích từng dòng hay đọc kỹ và suy nghĩ để hiểu cách làm   
Lưu ý : bài này không cần nộp lại. cần tự giác làm để code tốt hơn.   
### BTVN 12 :
tối ưu code todo app : https://github.com/dathalongbay/react-t2/blob/main/code/d12/index4.html và fix bug trong file này .
Anh có đổi cách dùng từ addEventListener sang dùng onclick do có bug ở các task mới     
Và chuyển sang tối ưu theo dạng function cho các đoạn code trùng lặp     
Code tham khảo sau khi fix bug và tối ưu :   
https://github.com/dathalongbay/react-t2/blob/main/code/d12/index4a.html
### BTVN 14 : 
Cắt giao diện figma. 2 tuần sau nộp  
Link file figma :
https://github.com/dathalongbay/react-t2/blob/main/LoginUIConcept%20(Community).fig
### BTVN 15 : 
Đọc 5 file trong link bên dưới  
https://drive.google.com/drive/folders/1YjXkntlsN78JE55i117iDyFc9xEh3Yxe?usp=sharing  
### BTVN 18 :
Truy cập vào link bên dưới tìm đọc các bài trong phần hook của react. Sau đó chuyển ứng dụng todo list trong js thuần sang react để buổi chủ nhật anh chữa nhé . 
https://vi.legacy.reactjs.org/docs/getting-started.html
![image](https://github.com/dathalongbay/react-t2/assets/6966136/aa881c8a-766e-4cbf-809f-cfdde824524b)
### BTVN 19 :
Chuyển ứng dụng calculator dạng js thuần sang react theo 2 dạng :   
1 - sử dụng class component  
2 - sử dụng functional component  
Gửi lại bài vào trước thứ 4 tuần này. 
### BTVN 20 :
1 - Chuyển phần typicode ở dạng class component sang function component sử dụng useEffect  
https://github.com/dathalongbay/react-t2/blob/main/code/d18/demo/src/lifecycle/Typicode.js  
2 - Chủ động đọc lý thuyết trong https://vi.legacy.reactjs.org/ và W3school phần react   
### BTVN 21 : 
1 - https://www.w3schools.com/react/react_exercises.asp   
2 - dùng chatgpt tìm hiểu các khái niệm HOC trong react và lift state up  



