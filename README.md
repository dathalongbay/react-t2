# react-t2
Tài liệu : https://drive.google.com/drive/folders/1XfL7xlb_5IG_i8DQKf2CSD8QxL2kZ-tI?usp=sharing

## Project 
Link tải về API :    
https://drive.google.com/file/d/1paRMqan4eMaAkHHBVwrmO8klndYr6yPp/view?usp=drive_link
download và giải nén ra đường dẫn : C:\laragon\www

File postman để import :  
![image](https://github.com/dathalongbay/react-t2/assets/6966136/1e3fdce1-731c-42a9-ba67-9331ebf3cbeb)

Cài PHP 8 cho laragon :
Paste file php8.1 vào đường dẫn sau và giải nén giống như trong ảnh : 
C:\laragon\bin\php

![image](https://github.com/dathalongbay/react-t2/assets/6966136/99deb8b9-821a-420a-9793-bd53048259bc)

Set PHP thành bản 8

![image](https://github.com/dathalongbay/react-t2/assets/6966136/1f54873e-130e-4ca1-9b26-5480ea8f9206)

Lệnh start API : php artisan serve --port=8123 
Chạy lệnh này trong terminal của laragon 
![image](https://github.com/dathalongbay/react-t2/assets/6966136/b9ec286e-6cb8-43dd-9e1a-55b417f4864f)
File SQL :    
![image](https://github.com/dathalongbay/react-t2/assets/6966136/bc1d373f-12c4-4634-ad37-b1da906eea54)

# Các thư viện dùng trong phần admin :
Ngoài ra cài tailwind và react router 
`npm install redux react-redux @reduxjs/toolkit jwt-decode redux-thunk axios`
Nhóm redux : redux react-redux @reduxjs/toolkit   
Nhóm login decode jwt : jwt-decode   
Nhóm xử lý tác vụ async bất đồng bộ : redux-thunk   
Gọi đến API : axios hay fetch   
