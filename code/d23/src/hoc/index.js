// HOC
const withSomeLogic = (Component) => {
   
    return (props) => (
        <div style={{padding: '10px',margin: '5px', background: 'orange'}}>
            <Component {...props} />
        </div>
    );
};

const SomePage = () => {

    const Button = ({ onClick }) => <button>Button</button>;
    const P = ({ onClick }) => <p>thẻ đoạn văn</p>;
    const ButtonWithSomeLogic = withSomeLogic(Button);
    const PWithSomeLogic = withSomeLogic(P);

    return (
        <>
            <h1>Demo high order component HOC</h1>
            <Button />
            <ButtonWithSomeLogic />
            <PWithSomeLogic />
        </>
    );
};

export default SomePage;