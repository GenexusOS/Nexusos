import React,{Component} from 'react';
// import './App.css';
// import Img1 from './images/wall.jpg';
// import Img2 from './images/452063.jpg';
// import $ from 'jquery';
import {Route,BrowserRouter,Switch, Router} from 'react-router-dom';
import signup from './signup';
import home from './App';
import settings from './settings';
import preloader from './pl';


class App extends Component {


render(){
return (

        <BrowserRouter>
        {/* <Link to="/signin">Signin</Link> */}
        <Switch>
          <Route path="/index" exact component = {home}/>
          <Route path="/auth" exact component = {signup} />
          <Route path="/settings" exact component = {settings} />
          <Route path="/" exact component= {preloader} />
        </Switch>
        </BrowserRouter>


  );
}
}
export default App;