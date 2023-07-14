import React, { useReducer } from 'react'

/* 
tác vụ biến :
1 - hoàn thành/hoặc không hoàn thành 1 task cụ thể
2 - thêm 1 task vào danh sách việc cần làm
3 - xóa 1 task trong danh sách việc cần làm 
4 - cập nhật name của task trong danh sách 
*/
const initTodos = [
    {
        id: 1,
        name: 'đánh răng',
        status: false
    },
    {
        id: 2,
        name: 'rửa mặt',
        status: false
    },
    {
        id: 3,
        name: 'ăn sáng',
        status: false
    },
    {
        id: 4,
        name: 'đi làm',
        status: false
    }
];

const todoReducerHandler = (currentTodos, action) => {
    switch (action.type) {
        case "CHANGE_STATUS":
            // xử lý logic thay đổi currentTodos
            return "giá trị mới currentTodos";
        case "ADD_TODO":
            // xử lý logc thay đổi thêm 1 todo mới vào currentTodos     
            return "mảng todos mới";
        case "UPDATE_TODO":
            // xử lý cập nhật
            return "mảng todos mới";
        case "DELETE_TODO":
            // xử lý xóa todo mong muốn
            return "mảng todos mới";
        default:
            return currentTodos;
    }
}

export const Todos = () => {

    const [todos, dispatch] = useReducer(todoReducerHandler, initTodos);

    // const [value, setValue] = useState(0);

    return (
        <>
            <div style={{ width: '500px', margin: '30px auto' }}>
                <h1>Todo list</h1>
                <div style={{ margin: '20px 0' }}>
                    <input name='newTask' value='' type='text' />
                    <button onClick={() => alert('new task')}>Thêm task</button>
                </div>
                <div>
                    {todos.length > 0 && todos.map(todo => (
                        <div key={todo.id}>
                            <input type="checkbox" checked={todo.status} onChange={() => alert(todo.id)} />
                            <span><input name={'input' + todo.id} type='text' value={todo.name} /></span>
                            <button onClick={() => alert(todo.id)}>Xóa task</button>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

