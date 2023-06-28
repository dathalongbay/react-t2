

function Student(props) {

    return (
        <>
            <ul>
                <li>Tên : {props.name}</li>
                <li>Tuổi : {props.age}</li>
                <li>Địa chỉ : {props.address}</li>
            </ul>
        </>
    );
}

export default Student;