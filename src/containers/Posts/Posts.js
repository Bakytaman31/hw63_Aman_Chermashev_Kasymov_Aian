import React, {Component} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import axios from 'axios';

class Posts extends Component {
    state = {
      dataPosts: [],
      posts: [],
    };

    async componentDidMount(){
        const requests = [];
        requests.push(axios.get('https://blog-chermashev-kasymov.firebaseio.com/post.json'));
        const responses = await Promise.all(requests);
        const posts = responses.map(r => r.data);
        this.setState({dataPosts: posts});
    }
    callback = () => {


    };

    render() {
        const data = this.state.dataPosts[0];
        let posts = [];
        for (let post in data){
           post = {
               title: data[post].title,
               message: data[post].message,
           };
           posts.push(post);
        }
        return (
            <div>
                <NavBar/>
                <button onClick={this.callback}>Click</button>
                {posts.map(post => {
                    return(
                        <div style={{border: '1px solid #ccc'}}>
                            <p>{post.title}</p>
                            <button>Read more</button>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Posts;