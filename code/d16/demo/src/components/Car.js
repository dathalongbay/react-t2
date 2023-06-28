import React from "react";

/* 
Components are like functions that return HTML elements.
Components giống hàm mà trả về các thẻ HTML.
Components có thể tái sử dụng được .
*/
class Car extends React.Component {

    /* trong class component có phương thức gọi là render() trả về html của component */
    render() {
        return (
            <>
                <h1>Class component đầu tiên</h1>
                <p>Phương thức = method : render()</p>
            </>
        );
    }

}

export default Car;
