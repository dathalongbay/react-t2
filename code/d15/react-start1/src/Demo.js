import { name,age,address,gender } from "./info"

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
            </ul>
        </div>
    );
}

export default Demo;