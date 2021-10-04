import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Notfound from './Components/Notfound/Notfound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      
      <Switch>
        <Route exact path='/home'>
        <Home></Home>
        </Route>
        <Route path='/about'>
        <About></About>
        </Route>
        <Route exact path='/service'>
        <Services></Services>
        </Route>
        <Route exact path='/contact'>
        <Contact></Contact>
        </Route>
        <Route exact path='*'>
        <Notfound></Notfound>
        </Route>
      </Switch>
      
      <Footer></Footer>
      </BrowserRouter>
     
     
     
     
    
    </div>
  );
}

export default App;
