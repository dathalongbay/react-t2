import {useState, useCallback} from 'react'
import TodosApplication from './TodosApplication';

const Wrap = () => {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(['todo 1', 'todo 2']);

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
                <h1>Demo useCallback</h1>
                <pre>
                    Trường hợp này lại gặp lại vấn đề thay đổi state trong component cha mà không thay đổi props trong component con nhưng component con vẫn bị render lại mặc dù đã sử dụng kỹ thuật memo.
                    Solution : giải pháp useCallback 

                </pre>
                <TodosApplication value={todos} demo={1} handleAddTodo={handleAddTodo} />
                <hr />

                <p>Set increment count</p>
                <button onClick={handleIncrement}>Increment + ({count})</button>

            </div>
        </>
    );
}

export default Wrap;