import {memo, useState} from 'react'
/* Using memo will cause React to skip rendering a component if its props have not changed.

This can improve performance.

Dùng memo sẽ là nguyên nhân react bỏ qua render 2 component nếu như
props của nó không thay đổi 
memo có thể cải thiện tốc độ/hiệu suất . 
*/

const TodosApp = (props) => {

    const [newTodo, setNewTodo] = useState('')

    console.log("todo rendering");
    console.log(props.value);

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

export default memo(TodosApp); 