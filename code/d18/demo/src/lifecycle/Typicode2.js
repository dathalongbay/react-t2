import {useState, useEffect} from 'react'

function Typicode2() {

    const [posts, setPosts] = useState([]);

    const handleClick = () => {
        alert('handle click');
    }


    /*
    useEffect thay the 
    1- componentDidMount
    2- componentWillUnmount
    3- componentDidUpdate
    */
    useEffect(() => {
        const endpoint = 'https://jsonplaceholder.typicode.com/posts';

        // fetch trả về promise 
        fetch(endpoint)
            .then((response) => {
                console.log('dòng 21');
                console.log(response);
                // chuyển response thành json data
                let dataConvert = response.json();
                console.log(dataConvert);
                return dataConvert;
            })
            .then(json => {
                console.log(json);
                this.setState({posts: json})
            })

        document.getElementById('box')
            .addEventListener('click', this.handleClick)
        
        return function cleanup() {
            document.getElementById('box')
        .removeEventListener('click', this.handleClick)  
        }
    }, []);

}

export default Typicode2;