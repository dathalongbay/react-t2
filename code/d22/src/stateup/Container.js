import {useState} from 'react'
import TodosApp from './TodosApp';
/* component cha
1 component bị render lại khi state hoặc prop của nó bị thay đổi 
-> component con bị render lại khi không cần thiết
component con bị ảnh hưởng do việc component cha render lại 
*/
const Container = () => {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(['todo 1', 'todo 2']);

    const handleIncrement = () => {
        // thay đổi state 
        // cách 1 là gán thẳng state mới vào hàm do hook useState chỉ định 
        // setCount(count+1);
        // cách 2 truyền vào hàm do useState chỉ định : 1 hàm arrow function với tham số đầu vào là state hiện tại 
        setCount( prevCount => prevCount+1)
    }

    return (
        <>
            <div>
                <Todo value={todos} demo={1} />
                <hr />

                <p>Set increment count</p>
                <button onClick={handleIncrement}>Increment + ({count})</button>

            </div>
        </>
    );
}

export default Container;