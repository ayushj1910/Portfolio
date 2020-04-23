import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import   Home  from './components/Home/Home';
import  Skills  from './components/skills/Skills';
import  Portfolio  from './components/portfolio/Portfolio';
import  NoMatch  from './components/nomatch/NoMatch';
import Footer from './components/Footer/Footer'
// import Policy from './components/Policy'
import NavbarComponent from './components/navbarComponent/NavbarComponent';

class  App extends React.Component {



  render(){
  return (
    <Router>
    <div className="App">
      <div >
       
        
         <NavbarComponent />
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Skills" component={Skills} />
              <Route path="/portfolio" component={Portfolio} />
              {/* <Route path="/policy" component={ Policy} /> */}
              
              <Route component={NoMatch} />
            </Switch>
          <Footer />
        
        
      </div>
    </div>
    </Router>
  )
  }
}

export default App;
