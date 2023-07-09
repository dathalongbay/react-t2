import React from 'react'
import './Typicode.css'
class Typicode extends React.Component {

    constructor(props) {
        super(props);

        // khai báo state ban đầu nếu muốn
        this.state = {
            posts : []
        }
    }

    // After rendering (DOM available)
    componentDidMount() {
        // viết js thuần trong đây 
        // vd điển hình : call API

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

    }

    componentWillUnmount() {
        // khi nào Unmout 
        
    }

    render() {

        // JSX 
        return (
            <>
                <h1>Demo component lifecycle</h1>

                { this.state.posts.length > 0 && this.state.posts.map(post => (<div className="demo" key={post.id}>
                    <p>{post.id} - {post.title}</p>
                    <p>{post.body}</p>
                </div>)) }


            </>
        );
    }


}

export default Typicode;