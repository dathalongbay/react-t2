import {useState} from 'react'
import TodosApp from './TodosApp';

const Container = () => {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(['todo 1', 'todo 2']);

    const handleIncrement = () => {
      
        setCount( prevCount => prevCount+1)
    }

    const handleAddTodo = (newTodo) => {
        let newTodosArray = [...todos, newTodo];
        setTodos(newTodosArray);
    }

    return (
        <>
            <div>
                <h1>Demo state up</h1>
                <pre>
                    Ngoài việc truyền props từ component cha xuống component như dạng 1 biết state như todos bên dưới 
                    Thì chúng ta có thể truyền prop dưới dạng 1 hàm function
                </pre>
                <TodosApp value={todos} demo={1} handleAddTodo={handleAddTodo} />
                <hr />

                <p>Set increment count</p>
                <button onClick={handleIncrement}>Increment + ({count})</button>

            </div>
        </>
    );
}

export default Container;