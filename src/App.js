import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import './assets/css/stylesGlobal.css'
import PageAdmin from './pages/Admin'
import PageInicio from './pages/PageInicio'
import { getAllLeads } from './actions/gettAll'
import PageInicio2 from './pages/PageInicio2'
import PageInicio3 from './pages/PageInicio3'

function App() {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getAllLeads())
  // }, [dispatch])
  return (
    <BrowserRouter>
      <div className="App">
        <Route>
          <Switch>
            <Route exact path="/emprendedores" component={PageInicio}></Route>
          </Switch>
          <Switch>
            <Route exact path="/consultorias" component={PageInicio2}></Route>
          </Switch>
          <Switch>
            <Route exact path="/eventos" component={PageInicio3}></Route>
          </Switch>
          <Switch>
            <Route exact path="/admin" component={PageAdmin}></Route>
          </Switch>
        </Route>
      </div>
    </BrowserRouter>
  )
}

export default App
