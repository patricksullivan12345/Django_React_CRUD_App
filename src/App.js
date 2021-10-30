//https://www.saaspegasus.com/guides/modern-javascript-for-django-developers/integrating-django-react/#passing-data-with-apis
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HashRouter as Router, Route } from 'react-router-dom'
import Get_all from "./components/Get_all"
import Post from "./components/Create"
import Header from "./components/Header"
import Edit from "./components/Edit"
import Delete from "./components/delete_success"


function App() {
  return (

    <Router>
      <Header/>
      <Route path='/' component={Get_all} exact />
      <Route path='/create'component={Post} exact />
      <Route path='/delete'component={Delete} exact />
      <Route path='/edit/:id' component={Edit} exact />
    </Router>

  );
}

export default App;