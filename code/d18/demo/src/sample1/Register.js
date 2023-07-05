import {useState} from 'react';

const Regiter = (props) => {

    /* let [hoten, setHoten] = useState('');
    let [ghichu, setGhichu] = useState('ghi chú');
    let [gioitinh, setGioitinh] = useState('nam');
    let [tinhtp, setTinhtp] = useState('hn'); */

    // dùng 1 state duy nhất object 
    let [data, setData] = useState({tinhtp: 'hn', gioitinh: 'nam'});

    const handleSubmit = (event) => {

        // ngăn chặn sự kiện mặc định của form là submit 
        event.preventDefault();

        let message = [];
        if (data.hoten == '') {
            message.push('Họ tên đang rỗng');
        }

        if (data.ghichu == '') {
            message.push('Ghi chú đang rỗng');
        }

        if (data.gioitinh != 'nam' && data.gioitinh != 'nu') {
            message.push('Giới tính không hợp lệ');
        }

        if (data.tinhtp == '') {
            message.push('Tỉnh tp không hợp lệ');
        }

        if (message.length > 0) {
            alert(message.toString());
        } else {
            //alert("dữ liệu OK");

            // push data đến API 
            alert(JSON.stringify(data, null, 2));
        }

    }

    const handleChange = (event) => {
        // lấy tên của ô input
        let nameInput = event.target.name;
        let valueInput = event.target.value;

        setData(prevState => ({...prevState, [nameInput]: valueInput}));
    }

    return (
        <>
            <form name='dangky' method='post' action='' onSubmit={handleSubmit}>
                <div>
                    <label>Họ tên</label>
                    <input type='text' name='hoten' value={data.hoten || ''} onChange={handleChange} />
                </div>
                <div>
                    <label>Ghi chú</label>
                    <textarea name='ghichu' onChange={handleChange} cols={'10'} rows={'10'} value={data.ghichu || ''}></textarea>
                </div>
                <div>
                    <label>Tỉnh thành</label>
                    <select name='tinhtp' onChange={handleChange}>
                        <option value='hn' >Hà nội</option>
                        <option value='hcm' >HCM</option>
                        <option value='dn' >Đà nẵng</option>
                    </select>
                </div>
                <div>
                    <label>Giới tính</label>
                    <input type='radio' name='gioitinh' onChange={handleChange} value={'nam'} />Nam
                    <input type='radio' name='gioitinh' onChange={handleChange} value={'nu'} />Nu
                </div>
                <div>
                    <button>Đăng ký</button>
                </div>
            </form>
        </>
    );

}

export default Regiter;