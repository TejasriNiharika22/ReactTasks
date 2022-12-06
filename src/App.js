// import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
import ModalPopup from './tasks/modalPopUp';
import React, { Component } from 'react';
// import ReverseString from '../src/tasks/reverseString';
// import ListComponent from '../src/tasks/listComponent';

class App extends Component {

  constructor(props){
  super(props);
  this.state = { showPopup: false };
  }

  togglePopup() {
   this.setState({
     showPopup: !this.state.showPopup
   });
 }

 render() {
  return (
    <div>
     <h1> Modal Popup Task </h1>
     <div>
      <button type="button" class="bottom-right" onClick={this.togglePopup.bind(this)}>BOTTOM-RIGHT BUTTON</button>
      </div>
     {/* <button onClick={this.togglePopup.bind(this)}> Modal Popup</button> */}

     {this.state.showPopup ?
       <ModalPopup
       nextTask = {this.state.showPopup}
        closePopup={this.togglePopup.bind(this)}
       />
       : null
     }
         {/* <ReverseString/> */}
    </div>

  );
}
}


export default App;

// import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import Login from './login/loginForm'
// import SignUp from './login/signUp'

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//           <div className="container">
          
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-in'} style = {{color: "black"}}>
//                     Sign in
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-up'} style={{color: "black"}}>
//                   Sign up
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         <div className="outer">
//           <div className="inner">
//             <Routes>
//               <Route exact path="/" element={<Login />} />
//               <Route path="/sign-in" element={<Login />} />
//               <Route path="/sign-up" element={<SignUp />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   )
// }

// export default App