import NotAuthen from "./pages/NotAuthen";

const withAuthen = (Component) => {

    if (!localStorage.getItem("user")) {
       return (props) => (
        <NotAuthen {...props} />
    );
    }
   
    return (props) => (
        <Component {...props} />
    );
};

export default withAuthen;