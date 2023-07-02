import React from 'react'

class Demo1 extends React.Component {

    constructor(props) {
        // gọi đến phương thức khởi tạo của class cha 
        super(props);

        // tạo ra state mặc định cho ứng dụng này

        this.state = {
            studentName: 'Nguyen Van A',
            studentAge: 21,
            boxColor: 'red',
            boxBgColor: 'green',
        };
    }

    changeData = () => {
        // thay đổi state ban đầu 
        this.setState({
            studentName: 'Le van lam',
            studentAge: 24,
            boxColor: 'orange',
            boxBgColor: 'gray',
        });
    }

    restoreData = () => {
        this.setState({
            studentName: 'Nguyen Van A',
            studentAge: 21,
            boxColor: 'red',
            boxBgColor: 'green',
        });
    }


    render() {

        // inline style
        let boxStyle = {color:this.state.boxColor, backgroundColor:this.state.boxBgColor};
        return (
            <>
                <div className='box' style={boxStyle}>
                    <h1>Demo state in class component</h1>
                    <p>In ra trạng thái state hiện tại : {this.state.studentName}</p>
                    <p>Tuổi SV : {this.state.studentAge}</p>
                    <p>Màu sắc : {this.state.boxColor}</p>
                    <p>Màu nền : {this.state.boxBgColor}</p>
                </div>

                <button onClick={this.changeData}>Nút số 1</button>
                <button onClick={this.restoreData}>Nút số 2</button>
            </>
        );
    }

}

export default Demo1;