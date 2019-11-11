import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Clientes from './clientes/Clientes'
export default function Routes() {
  return <Switch>
    <Route exact path="/home">
      < Home />
    </Route>
    <Route path="/consulta-clientes">
      < Clientes />
    </Route>
  </Switch>
}