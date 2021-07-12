import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//Components
import Header from './components/Header'
import Main from './components/Main'
import Episodes from './components/Episodes'

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/episodes/:id" component={Episodes}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
