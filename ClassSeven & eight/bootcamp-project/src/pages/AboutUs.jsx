import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const AboutUS = () =>{
    useEffect(() => {
        document.title = "Title Will be here";
      });
    return (
        <div>
            <h1>This is about us</h1>

            <Link to={'/'}>Home</Link>
            <br/><br/>
            <a href="/about-us">About Us</a>
            <br/><br/>
            <Link to={'/about-us'}>About Us</Link>

            {/* <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
        </div>
    );
};

export default AboutUS;