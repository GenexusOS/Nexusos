import React,{Component} from 'react';
import './pl.css';
// import $ from 'jquery';
// import {NavLink} from 'react-router-dom';



class App extends Component {

    
      
    

      myFunction=function() {
        setTimeout(()=>{
            window.location="/auth";
        } , 2000);
      }
    
render(){
    return (


<div class="loader" style={{margin:"25rem auto"}} onLoad={this.myFunction()}>

</div>

      );
    }
    }


    export default App;