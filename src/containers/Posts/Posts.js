import React, {Component} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import axios from 'axios';

class Posts extends Component {
    getPosts = async () => {
        axios({
            method: 'get',
            url: 'https://blog-chermashev-kasymov.firebaseio.com/',
        })
            .then(res => {
                console.log(res.data)
            })
    };

    render() {
        return (
            <div>
                <NavBar/>
                <button onClick={this.getPosts}>Hello</button>
            </div>
        );
    }
}

export default Posts;