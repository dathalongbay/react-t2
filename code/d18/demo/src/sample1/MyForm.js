import {useState} from 'react'

function MyForm() {
    const [inputs, setInputs] = useState({demo: 'abc'});

    const handleChange = (event) => {
        const name = event.target.name; // username
        const value = event.target.value;

        setInputs((prevState) => {
            console.log('prevState');
            console.log(prevState);
            let finalState = {...prevState, [name]: value}
            console.log('finalState');
            console.log(finalState);
            return finalState; 
        }); 
       
        //setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default MyForm;