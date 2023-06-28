

function Demo3() {

    let age = 21;
    let txt = 'trẻ em';
    if (age >= 18) {
        txt = 'người lớn';
    }

    /* câu lệnh điều kiện trong component */

    return (
        <>
            <h1>Demo câu lệnh if else trong JSX</h1>
            <p>{txt}</p>
        </>
    );
}

export default Demo3;