import React from "react";

class Motor extends React.Component {

    /* Props trong component 
        Props = đạo cụ = tài sản = thuộc tính của component.
        Props giống đối số để chúng ta có thể truyền vào 
        component như 1 thuộc tính .

    */

    render() {

        return (
            <>
                <ul>
                    <li>Tên hãng : {this.props.brand}</li>
                    <li>Model : {this.props.model}</li>
                    <li>Năm sản xuất : {this.props.year}</li>
                    <li>Màu sắc : {this.props.color}</li>
                </ul>
            </>
        );
    }
}

export default Motor;


