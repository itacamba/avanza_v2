
import './App.css';
import Home from './components/Home'
import Navigation from './Navigation'
import WeigerDetails from './detail_pages/Weiger'
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
        <Route exact path="/weiger" component={WeigerDetails} />
      </Switch>
      {/* Footer Goes Here */}
    </Router>
  );
}

export default App;
