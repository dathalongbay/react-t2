import {useState} from 'react'
import './Accordion.css'

function Accordion2(props) {
    // props và state 
    // props = thuộc tính component ( thông thường nó truyền component cha xuống component con hoặc props là dữ liệu tĩnh)
    // state = dữ liệu động trong component và có thể thay đổi được 

    // khai báo state trong function component useState("giá trị mặc định")
    // trong class component để thay đổi state dùng cú pháp this.setState({stateName: newValue})
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        // thay đối giá trị state trong function component bằng hook
        //setIsOpen(true);

        // đảo ngược giá trị của state isOpen
        // tức là isOpen là false thì đảo ngược bằng ! -> true
        // isOpen là true thì đảo ngược bằng ! -> false
        setIsOpen(!isOpen); 
    }

    return (
        <>
            <h3 className='acc-title' onClick={handleClick}>
                {props.title}
            </h3>
            { isOpen && <div className='acc-content'>{props.children}</div>}
        </>
    );
}

export default Accordion2;