import React from "react";
import './components.css';
import { Button, Navbar } from 'reactstrap';

const Land = () => {
  return (
    <div className="land">
      <Navbar className="landNav">
        <h2>Top 3</h2>  
        <Button className="landBtn"color="primary" href="/login">Sign In</Button> 
      </Navbar> 
      <div className='landCard'>
        <h2>Top 3</h2>
        <p>
          When was the last time you had to pick your Top 3 movies? Don't
          worry...here's your chance!
        </p>     
        <p> 
          <Button color="primary" className="register-button" href="/register">Register Here</Button>  
        </p> 
      </div>
    </div>
  );
};

export default Land;

