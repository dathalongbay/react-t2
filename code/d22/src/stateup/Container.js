import {useState} from 'react'
import TodosApp from './TodosApp';

const Container = () => {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(['todo 1', 'todo 2']);

    const handleIncrement = () => {
      
        setCount( prevCount => prevCount+1)
    }

    return (
        <>
            <div>
                <TodosApp value={todos} demo={1} />
                <hr />

                <p>Set increment count</p>
                <button onClick={handleIncrement}>Increment + ({count})</button>

            </div>
        </>
    );
}

export default Container;