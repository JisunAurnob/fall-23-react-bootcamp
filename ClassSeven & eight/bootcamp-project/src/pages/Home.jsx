import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () =>{
    useEffect(() => {
        document.title = "Title Will be here";
      });
    return (
        <div>
            <h1>This is home</h1>

            <Link to={'/'}>Home</Link>
            <br/><br/>
            <a href="/about-us">About Us</a>
            <br/><br/>
            <Link to={'/about-us'}>About Us</Link>
        </div>
    );
};

export default Home;