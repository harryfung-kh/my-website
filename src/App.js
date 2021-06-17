import './App.css';
import InfinitySlider from './InfinitySlider';
import MainPage from './Pages/MainPage/MainPage'
import Greeting from './Pages/Greeting/Greeting'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';

function App() {
  let match = useRouteMatch();

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={`${match.path}/Greeting`}>
            <Greeting />
          </Route>
          <Route path={match.path}>
            <MainPage />
          </Route>
        </Switch>
        {/* <InfinitySlider /> */}
      </div>
    </Router>
  );
}

export default App;
