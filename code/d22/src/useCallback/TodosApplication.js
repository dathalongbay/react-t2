import {memo, useState} from 'react'


const TodosApplication = (props) => {

    const [newTodo, setNewTodo] = useState('')

    console.log("todo rendering");

    const handeAdd = () => {
        // gửi dữ liệu lên component cha
        props.handleAddTodo(newTodo);
        setNewTodo('');
    }

    return (<>

            <div>
                <input name='newTodo' value={newTodo} type='text' onChange={(evt) => setNewTodo(evt.target.value)} />
                <button onClick={handeAdd}>Add todo</button>
            </div>
            {props.value.length > 0 && props.value.map((todoItem, index) => {
                return <div key={index}>{todoItem}</div>
            })}
        </>);



}

export default memo(TodosApplication); 