import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import './App.css';
import './assets/css/stylesGlobal.css'
import PageAdmin from './pages/Admin';
import PageInicio from './pages/PageInicio';
import { getAllLeads } from './actions/gettAll';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllLeads());
  }, [dispatch]);
  return (
    <BrowserRouter>
    <div className="App">
     <Route >
     <Switch>
     <Route exact path="/" component={PageInicio}>

     </Route>
     </Switch>
     <Switch>
     <Route exact path="/admin" component={PageAdmin}>

     </Route>
     </Switch>
     </Route>
     </div>
    </BrowserRouter>
    
  );
}

export default App;
