import { Component } from "react";
import Arry from "./components/Arry";
import User from "./components/User";
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from "./components/Post";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import NavBar from "./components/navbar";
import TodoRedux from "./components/todoRedux";
import {store} from "./store";
import { Provider } from "react-redux";
import Employee from "./components/Employee";
import "./App.css"

export default class App extends Component{
 
  /* Which function does react call : render() */
  render(){  /* render must return something(JSX) */
    return(
        <div>
          <Provider store={store}>
          <NavBar />
          <Routes>
          <Route path="/" element={ <TodoRedux />} />
            <Route path="/" element={ <Arry />} /> 
            <Route path="/posts" element={ <Post />} /> 
            <Route path="/employee" element={ <Employee />} /> 
            <Route path="/sign-up" element={ <SignUp />} /> 
            <Route path="/users" element={ <User />} /> 
            <Route path="*" element={ <PageNotFound />} />
          </Routes>
          </Provider>
        </div>
    );
  }
}