import React from "react";
import {loggedInRoutes, loggedOutRoutes} from './Routes';
import Desktop from '../src/Screens/Desktop';
import firebase from 'firebase/app';

export default class App extends React.Component{
  componentDidMount(){
    var genres = ["Hip Hop", "RnB", "Rock"];
    localStorage.setItem("genres", genres.join("/"))
  }

  render(){
    if(window.screen.width > 800){
      return <Desktop/>
    }else{
    if(localStorage.getItem("logged")){
      return (loggedInRoutes)
    }else{
      return (loggedOutRoutes)
    }
    
}
}
}