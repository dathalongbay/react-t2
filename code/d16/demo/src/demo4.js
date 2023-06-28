

function Demo4() {

    // câu lệnh đk rút gọn (điều kiện) ? câu lệnh 1 : câu lệnh 2;
    let age = 21;

    return (
        <>
            <h1>Demo câu lệnh đk rút gọn trong JSX</h1>
            <p>{(age >=18) ? 'người lớn' : 'trẻ em'}</p>
        </>
    );
}

export default Demo4;