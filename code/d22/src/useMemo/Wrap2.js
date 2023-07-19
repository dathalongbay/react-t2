import {useState, useCallback, useMemo} from 'react'
import TodosApplication2 from './TodosApplication2';

const Wrap2 = () => {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(['todo 1', 'todo 2']);

    const tinhToan = useMemo(() => tinhToanDemo(count), [count]);

    const handleIncrement = () => {
      
        setCount( prevCount => prevCount+1)
    }

    // khi component bị render lại thì các function trong component đó được tạo lại 
    // useCallback(đối số 1, đối số 2)
    // đối số 1 là function cần lưu trữ tối ưu cache lại tránh việc tạo lại khi không cần thiết
    // đối số 2 là dependency 
    // useCallback được dùng để tránh việc tạo lại hàm 
    const handleAddTodo = useCallback((newTodo) => {
        let newTodosArray = [...todos, newTodo];
        setTodos(newTodosArray);
    }, [todos])
    // tạo lại khác với chạy lại 

    // không nhầm lần giữa useEffect và useCallback
    // useEffect(hàm,dependency) dependency của effect bị thay đổi thì hàm trong đối số được chạy lại 

    return (
        <>
            <div>
                <h1>Demo useMemo</h1>
                <pre>
                   useMemo ghi nhớ 1 giá trị để tối ưu hiệu suất của ứng dụng react . 
                   useCallback ghi nhớ 1 function 

                   useMemo(đối số 1, đối số 2)
                   đối số 1 là function được chạy lại khi mà đối số 2 bị thay đổi 
                   đối số 2 chính là dependency

                </pre>
                <TodosApplication2 value={todos} demo={1} handleAddTodo={handleAddTodo} />
                <hr />

                <p>tinh toan : {tinhToan}</p>

                <p>Set increment count</p>
                <button onClick={handleIncrement}>Increment + ({count})</button>

            </div>
        </>
    );
}

const tinhToanDemo = (so) => {
    console.log('tinhToanDemo');
    for(let i = 0; i < 2000000000; i++) {
        so += 1;
    }

    return so;
}

export default Wrap2;