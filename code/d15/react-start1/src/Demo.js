
/* 
TH1 : khi import 1 biến/hàm từ file có cú pháp export default thì 
khi import vào không cần để trong {} : import A from 'path'
trong đó A là tên biến hay tên hàm 

TH2 : khi import những biến/ham từ file có cu pháp export {var1,var2...} thì khi import {var1,var2} from 'path'
 */
import tinhDiemTB,{ name,age,address,gender,xepLoai } from "./info"
import students from "./students";
import cities from './cities';
import studentInfo, {studentScore, testStudent} from "./destructObject";

import { northCites,southCities } from "./spread";

function Demo() {

    // destructuring array
    let [hn,hcm,dn] = cities;

    // destructuring object
    let {student_name, student_phone} = studentInfo;

    // toán tử ... spread operator 
    // dùng để copy tất cả giá trị trong array hoặc object vào bên trong object hoặc array khac

    let allCities = [...northCites, ...southCities];

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

            <h4>Danh sách sinh viên dùng array.map</h4>
            {/* commet trong react jsx array.map(arrow function () => {}) */}
            { students.map( (studentItem) => {
                return (
                    <div className="student-item" style={{borderBottom: '1px solid red', backgroundColor: 'violet',fontSize: '16px'}}>
                        <div>{studentItem.name}</div>
                        <p>{studentItem.age}</p>
                        <section>{studentItem.address}</section>
                    </div>  
                )
            } ) }

            <h3>Code thử dùng destructuring array</h3>
            <p>{hn}</p>
            <p>{hcm}</p>
            <p>{dn}</p>

            <h3>Code thử dùng destructuring object</h3>
            <p>{student_name}</p>
            <p>{student_phone}</p>

            <h3>Dùng destructuring như 1 tham số đầu vào khi khai báo function</h3>
            {testStudent(studentScore).toString()}

            <h3>In ra allCites bên trên dùng toán tử ...</h3>
            <ul>
            { allCities.map( cityItem => {
                return (
                    <li>{cityItem}</li>   
                )
            } ) }
            </ul>
        </div>
    );
}

export default Demo;