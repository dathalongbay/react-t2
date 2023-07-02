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

    handleClick = () => {
        alert("Handle Click Event");

        // thay đổi state
        this.setState({color: 'orange'})
    }

    /* phương thức render trả ra html */
    render() {
        // JSX
        return (
            <>
                <div className="computer-wrap" style={{fontSize: "14px",backgroundColor: "green", color: this.state.color}}>
                    <h3>Tên máy tính : {this.props.name}</h3>
                    <button onClick={this.handleClick}>Nút test</button>
                </div>
            </>
        )
    }


}