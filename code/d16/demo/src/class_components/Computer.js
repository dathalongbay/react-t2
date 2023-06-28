import React from "react";

export default class Computer extends React.Component {

    /* phương thức khởi tạo */
    constructor(props) {
        // gọi đến constructor của class cha 
        super(props);

        /* props và state */
        /* không thể gán props trong component chỉ có thể xem và hiển thị props  */

        /* state = trạng thái . hiểu đơn giản thành phần động trong component */

        this.state = {color: "red", model: "XYZ"};
    }

    handleClick() {
        alert("Handle Click Event");
    }

    /* phương thức render trả ra html */
    render() {
        return (
            <>
                <div className="computer-wrap" style={{fontSize: "14px",backgroundColor: "green"}}>
                    <h3>Tên máy tính : {this.props.name}</h3>
                    <button onClick="">Nút test</button>
                </div>
            </>
        )
    }


}