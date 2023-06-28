

function Demo() {
    /* Lỗi không biên dịch được khi return về nhiều thẻ html ngang hàng nhau */

    /* Fix lỗi này có 2 cách :
    cách 1 : bao tất cả các thẻ html trong 1 thẻ mẹ
    trong react sử dụng từ khóa keyword class để tạo lớp mà vô tình trung thuộc tính class của css 
    
    Cách 2: đặt các thẻ html trong fragment <></>
    ưu điểm của cách 2 hơn cách 1 là không tạo ra 1 thẻ thừa trong trường hợp cần */
    return (
        <>
            <h1>React JSX (viết tắt của JS XML)</h1>
            <p>React JSX cho phép viết HTML trong React</p>
        </>  
    )
}

export default Demo;