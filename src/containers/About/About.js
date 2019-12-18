import React from 'react';
import NavBar from "../../components/NavBar/NavBar";

const About = () => {
    return (
        <div>
            <NavBar/>
            <h1>About Us</h1>
            <h3>Welcome to the Blog App created by Aman Chermashev and Aian Kasymov</h3>
            <p style={{fontSize: '25px'}}>Here must be the description of our app, but we decided to not spend too much time for it.</p>
        </div>
    );
};

export default About;