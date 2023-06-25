
/* 
TH1 : khi import 1 biến/hàm từ file có cú pháp export default thì 
khi import vào không cần để trong {} : import A from 'path'
trong đó A là tên biến hay tên hàm 

TH2 : khi import những biến/ham từ file có cu pháp export {var1,var2...} thì khi import {var1,var2} from 'path'
 */
import tinhDiemTB,{ name,age,address,gender,xepLoai } from "./info"

function Demo() {
    // React JSX
    return (
        <div className="container demo">
            <p>Thẻ p component demo</p>
            <a href="#">Thẻ a trong component demo</a>
            <ul>
                <li>Tên : {name}</li>
                <li>Tuổi : {age}</li>
                <li>Địa chỉ : {address}</li>
                <li>Giới tính : {gender.toString()}</li>
                <li>Điểm TB : { tinhDiemTB() }</li>
                <li>Xếp loại : { xepLoai() }</li>
            </ul>
        </div>
    );
}

export default Demo;