import React, {useState, useEffect, useRef} from 'react'

// truy cập trực tiếp trong dom 
export const Ref2 = () => {

    const divRef = useRef();

    const handeClick = () => {
        alert(divRef.current.innerHTML);
    }

    return(
       <>

        <div ref={divRef}>
            <h3>Nội dung của thẻ html</h3>
            <p>demo nội dung thẻ p</p>
        </div>

        <button onClick={handeClick}>Lấy nội dung content của div</button>
       </>
    )
}

