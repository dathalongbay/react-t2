import Person from "./Person";

function Room(props) {

    return (
        <>

            <h1>Phòng chat : {props.name}</h1>
            <h1>Thời gian tạo : {props.created}</h1>
            <h2>Dùng component bên trong component khác</h2>
            <Person person_name="Nguyễn văn anh" address="hà nội" />

            <br />

            <Person person_name="Trần tuần" address="bắc ninh" />
        </>
    );

}

export default Room;