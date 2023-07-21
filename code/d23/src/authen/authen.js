

const withAuthen = (Component) => {

    if (!localStorage.getItem("user")) {
        //alert('chưa đăng nhập');
        // chuyển hướng đến trang chủ, thông báo chưa đăng nhập
        //location.href = 'https://google.com';
    }
   
    return (props) => (
        <Component {...props} />
    );
};

export default withAuthen;