import './App.css';
import InfinitySlider from './InfinitySlider';
import MainPage from './Pages/MainPage/MainPage'
import Greeting from './Pages/Greeting/Greeting'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/greeting">
            <Greeting />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
        {/* <InfinitySlider /> */}
      </div>
    </Router>
  );
}

export default App;
