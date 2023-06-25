let studentInfo = {
    student_name: "hà anh tuấn",
    student_age: 23,
    student_address: "hà nội",
    student_school: "đại học hà nội",
    student_phone : "0988787484"
};

export default studentInfo;

let studentScore = {
    toan: 9,
    ly: 5,
    hoa:6,
    van: 5,
    su:9,
    dia:3,
    anh:4,
    sinh:7,
    tin:8
};

function testStudent({toan, ly, hoa}) {
    // khai báo tham số destructuring object {var1,var2 ...}
    // thi khối A : toan,ly,hoa
    let tb = (toan+ly+hoa)/3;
    if (tb > 6) {
        return true;
    }

    return false;
}

export {studentScore, testStudent}