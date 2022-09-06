import {Route, Switch} from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import About from './components/About'
import Notfound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route component={Notfound} />
  </Switch>
)

export default App
