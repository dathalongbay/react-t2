

const Demo1 = () => {

    /* tìm hiểu về tham chiếu và tham trị trong js */

    let a = {name: 'ha noi', desc: 'thu do viet nam'};
    let b = a;

    // thay đổi giá trị của b
    b = {name: 'da nang', desc: 'thanh pho bien mien trung'};

    return (
        <>
        <h2>In ra object trong JSX : </h2>
            <div>a : 
                <pre>
                    {JSON.stringify(a, null, 2)}
                </pre>
            </div>
            <div>b : 
                <pre>
                    {JSON.stringify(b, null, 2)}
                </pre>
            </div>
        </>
    );

}

export default Demo1;