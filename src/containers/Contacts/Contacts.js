import React from 'react';
import NavBar from "../../components/NavBar/NavBar";

const Contacts = () => {
    return (
        <div>
            <NavBar/>
            <h1>Contacts</h1>
            <h4>If you have any questions or problems, you can contact us any time.</h4>
            <p style={{fontSize: '25px'}}>blogapp@gmail.com</p>
        </div>
    );
};

export default Contacts;