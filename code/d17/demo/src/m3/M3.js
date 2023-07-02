

const M3 = () => {

    const handleClick = (a, b) => {

        console.log(b);

    }

    return (
        <>
            <button onClick={(event) => handleClick("test", event)}>Nút Click</button>
        </>
    );
}

export default M3;