import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/gallery" component={Gallery}/> 
          <Route path="/contact" component={Contact}/>
          <Route path="/" component={Home}/>   
        </Switch>
      </BrowserRouter>
      <Footer />      
    </div>
  );
}

export default App;
