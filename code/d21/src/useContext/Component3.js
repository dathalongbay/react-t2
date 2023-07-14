import React, {useContext} from 'react'
import { UserContext } from './Component1';
export const Component3 = () => {

    const user = useContext(UserContext);
    return(
        <div>
            <h3>Component3</h3>
            <p>ID : {user.id}</p>
            <p>Username : {user.username}</p>
            <p>Email : {user.email}</p>
        </div>
    )
}

/* 
nếu chỉ cần truyền 1 cấp cha sang con thì nên dùng prop truyền
khi truyền qua nhiều cấp ( vd > 1 cấp ông sang cháu ) nên sử useContext truyền dữ liệu
*/

