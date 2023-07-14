import React, {useState} from "react";

const Collapsible = (props) => {

    let [isOpen,setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <h3 onClick={handleClick}>{props.title}</h3>
            {isOpen && <div>{props.children}</div>}
        </>
    );
}

export default Collapsible;