import {memo} from 'react'
/* Using memo will cause React to skip rendering a component if its props have not changed.

This can improve performance.

Dùng memo sẽ là nguyên nhân react bỏ qua render 2 component nếu như
props của nó không thay đổi 
memo có thể cải thiện tốc độ/hiệu suất . 
*/

const Todo = ({value, demo}) => {

    console.log("todo rendering");
    console.log(value);

    return (<>
            {value.length > 0 && value.map((todoItem, index) => {
                return <div key={index}>{todoItem}</div>
            })}
        </>);



}

export default memo(Todo); 