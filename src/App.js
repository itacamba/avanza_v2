
import './App.css';
import Home from './components/Home'
import Navigation from './Navigation'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (

    <Router className="App">
        <Navigation/>

      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/portfolio" component={Portfolio} /> */}
      </Switch>
      {/* Footer Goes Here */}
    </Router>
  );
}

export default App;
