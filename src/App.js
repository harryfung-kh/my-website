import './App.css';
import MainPage from './Pages/MainPage/MainPage'
// import Greeting from './Pages/Greeting/Greeting'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path="/portfolio/greeting">
            <Greeting />
          </Route> */}
          <Route path="/portfolio">
            <MainPage />
          </Route>
        </Switch>
        {/* <InfinitySlider /> */}
      </div>
    </Router>
  );
}

export default App;
