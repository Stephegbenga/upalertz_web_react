import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react';

import './style.css'
import Home from './views/home'
import Pricing from './views/pricing'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Pricing} exact path="/pricing" />
      </div>
      <Analytics />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
