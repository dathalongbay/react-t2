import React, {useState, useEffect, useRef} from 'react'

export const Ref1 = (props) => {
    // component render lần đầu tiên
    // component re-render lại khi mà prop hoặc state trong component đó bị thay đổi
    const [valueInput, setValueInput] = useState("");
    // đến số lần re render lại của component
    // useRef giữ được giá trị sau các lần render
    const countReRender = useRef(0);

    // khi useEffect không có dependency trong đối số thứ 2
    // thì nó sẽ chạy hàm bên trong useEffect trong lần đầu tiên và mỗi khi state bị cập nhật
    useEffect(() => {
        // truy cập countReRender
        // lấy được giá trị từ biến sử dụng useRef
        // dùng cú pháp varName.current 
        countReRender.current = countReRender.current + 1;
    });

    return(
        <div>
            <input type='text' name='demo' value={valueInput} onChange={(e) => setValueInput(e.target.value)} />

            <p>Số lần re render lại component : {countReRender.current}</p> 
        </div>
    )
}

