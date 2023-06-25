let name="Nguyễn văn bình"
let age=21
let address="hà nội"
let gender=true


function tinhDiemTB() {
    let toan = 9
    let ly = 8
    let hoa = 6
    let tb = (toan+ly+hoa)/3;
    return tb;
}

function xepLoai() {
    return "Khá";
}


// export ( xuất bình thường )
// export default ( xuất mặc định )

// xuất thông thường : export {var1, var2, var3 ...}
export {name, age, address, gender, xepLoai}

// chỉ xuất đc 1 biến hoặc 1 hàm mặc định : 
//export default TenBien||TenHam
export default tinhDiemTB;