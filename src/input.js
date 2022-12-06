import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap"

function Input() {

  function handleChange(event) {
    console.log(event.target.value);
  }
  
  return (
    <div className='CN1'>
   <h4> Input box <input name="firstName" onChange={handleChange} /> </h4> 
    <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            <h4>ReactJS Reactstrap Button Component</h4>
            <Button color="success">Success Color Button</Button> <br></br>
            <Button color="danger">Danger Color Button</Button> <br></br>
            <Button color="warning">Warning Color Button</Button> <br></br>
            <Button color="primary">Primary Color Button</Button> <br></br>
            <Button color="secondary">Secondary Color Button</Button> <br></br>
            <Button color="info">Info Color Button</Button> <br></br>
            <Button color="link">Link Color Button</Button>
        </div>
    </div>
  );
}

export default Input;