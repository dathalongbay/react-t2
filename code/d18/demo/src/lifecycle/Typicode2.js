import { useState, useEffect } from 'react'

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
                setPosts(json);
            })

        document.getElementById('box')
            .addEventListener('click', handleClick)

        // componentWillUnmount
        return function cleanup() {
            document.getElementById('box')
                .removeEventListener('click', handleClick)
        }
    }, []);

    return (
        <>
            <h1 id='box'>Demo component lifecycle</h1>

            {posts.length > 0 && posts.map(post => (<div className="demo" key={post.id}>
                <p>{post.id} - {post.title}</p>
                <p>{post.body}</p>
            </div>))}
        </>
    );

}

export default Typicode2;