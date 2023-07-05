

const Demo1 = () => {

    /* tìm hiểu về tham chiếu và tham trị trong js */

    // tham trị ảnh hưởng với kiểu dữ liệu object và array
    let a = {name: 'ha noi', desc: 'thu do viet nam'};
    // phép gán a cho b 
    // -> gọi là tham chiếu : khi a là object mà gán cho b thì cả a và b đều tham chiếu đến ô nhớ 
    let b = a;
    // thay đổi giá trị của thuộc tính trong biến b
    b.name = 'hcm';
    b.desc = 'thanh pho mang ten bac';

    let c = ['honda', 'yamaha', 'suzuki'];

    // c là array gán cho d thì cả c và d đều tham chiếu đến 1 ô nhớ -> khi thay đổi phần tử d thì c cũng sẽ bị ảnh hưởng 
    let d = c;
    // thay đổi giá trị của d 
    d[0] = 'vinfast';

    let e = 5;
    let f = e;
    f = 100;

    let g = 'samsung';
    let h = g;
    h = 'apple';

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
            <div>c : 
                <pre>
                    {JSON.stringify(c, null, 2)}
                </pre>
            </div>
            <div>d : 
                <pre>
                    {JSON.stringify(d, null, 2)}
                </pre>
            </div>
            <div>e : {e}</div>
            <div>f : {f}</div>
            <div>g : {g}</div>
            <div>h : {h}</div>
        </>
    );

}

export default Demo1;