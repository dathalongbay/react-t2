

function Person(props) {

    return (
        <>
            <p>Tên người chat : {props.person_name}</p>
            <p>Địa chỉ : {props.address}</p>
        </>
    );

}

export default Person;