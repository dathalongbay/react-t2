import withAuthen from "../authen";

const Admin = () => {

    return (
        <>
        Trang quản trị đã đăng nhập thành công
        </>
    );
}



export default withAuthen(Admin);