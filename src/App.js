import { Component } from "react";
import Arry from "./components/Arry";
import Emp from "./components/Emp";
import Users from "./components/Users";
import Post from "./components/Post";
import Todo from "./components/Todo";

import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  /* which function does react call? : render() */

  render() {
    return (

      <div>
        {/* <Arry />
        <hr />
        <Emp /> */}

        {/* <Users />
        <Post /> */}
        <Todo />

      </div>
    );
  }

}






















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
