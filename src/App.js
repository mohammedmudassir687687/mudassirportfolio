import './App.css';
import Skills from './Skills';
import Projects from './Projects';
import Hobbies from './Hobbies';
import Contact from './Contact';
import Home from './Home';
import {Switch, Route} from 'react-router';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <div className="App">
      {/* <Route exact path='/home' component={Home} /> */}
      <AnimatedCursor />
      <Switch>
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/hobbies' component={Hobbies} />
        <Route exact path='/contact' component={Contact} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
