import React,{Component} from 'react';
import './css_comp/index/index.css';
import Img60 from './images/index/loading.png';
import Img61 from './images/index/mic.png';
import Img62 from './images/index/weather.png';

// import $ from 'jquery';
// import {NavLink} from 'react-router-dom';



class App extends Component {

    onmousedown = function(event) {

        let b=event.target.id;
    
        let ball=document.getElementById(b);
    
        ball.style.position = 'absolute';
        ball.style.zIndex = 1000;
    
      document.body.append(ball);
    
      function moveAt(pageX, pageY) {
        ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
        ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
      }
    
      moveAt(event.pageX, event.pageY);
    
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }
    
      document.addEventListener('mousemove', onMouseMove);
    
      onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
      };
      
      ondragstart = function() {
      return false;
    };
    
    };

    submithandler=(event)=>{
        event.preventDefault();
        window.location="/settings";
    }
    
render(){
    return (
<span>
      <div class="center">
        <img src={Img60} alt="None" class="loading responsive" />
        <input class="cssname input2" type="text" placeholder="Generate" required />
        <img src={Img61} alt="None" class="loading mic responsive" />
    </div>
    <div class="list">
        <div class="item" id="bb1" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Acorn"></button>
            <p class="item-text" >Acorn</p>
        </div>
        <div class="item" id="bb2" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="AirBnB"></button>
            <p class="item-text">AirBnB</p>
        </div>
        <div class="item" id="bb3" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Settings"></button>
            <p class="item-text">Settings</p>
        </div>
        <div class="item" id="bb4" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Store"></button>
            <p class="item-text">Store</p>
        </div>
        <div class="item" id="bb5" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Devices"></button>
            <p class="item-text">Devices</p>
        </div>
        <div class="item" id="bb6" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Files"></button>
            <p class="item-text">Files</p>
        </div>
        <div class="item" id="bb7" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Print"></button>
            <p class="item-text">Print</p>
        </div>
        <div class="item" id="bb8" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Info"></button>
            <p class="item-text">Info</p>
        </div>
        <div class="item" id="bb9" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Math"></button>
            <p class="item-text">Math</p>
        </div>
        <div class="item" id="bb10" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="News"></button>
            <p class="item-text">News</p>
        </div>
        <div class="item" id="bb11" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Internet"></button>
            <p class="item-text">Internet</p>
        </div>
        <div class="item" id="bb12" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Generator"></button>
            <p class="item-text">Generator</p>
        </div>
        <div class="item" id="bb13" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Wallet"></button>
            <p class="item-text">Wallet</p>
        </div>
        <div class="item" id="bb14" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Universe"></button>
            <p class="item-text">Universe</p>
        </div>
        <div class="item" id="bb15" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Editor"></button>
            <p class="item-text">Editor</p>
        </div>
        <div class="item" id="bb16" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Assistant"></button>
            <p class="item-text">Assistant</p>
        </div>
        <div class="item" id="bb17" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Message"></button>
            <p class="item-text">Message</p>
        </div>
        <div class="item" id="bb18" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Health"></button>
            <p class="item-text">Health</p>
        </div>
        <div class="item" id="bb19" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Calendar"></button>
            <p class="item-text">Calendar</p>
        </div>
        <div class="item" id="bb20" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Government"></button>
            <p class="item-text">Government</p>
        </div>
        <div class="item" id="bb21" onMouseDown={this.onmousedown} onMouseMove={this.onMouseMove} onMouseUp={this.onmouseup} onDragStart={this.ondragstart}>
            <button class="item-btn" id="Social"></button>
            <p class="item-text">Social</p>
        </div>
    </div>
    <div class="weather float-right">
        <img src={Img62} alt="weather" class="weather-img responsive" />
    </div>
    <div class="rt">
        <div class="take-pictures">
            <button class="item-btn2" id="takePictures"></button>
            <button class="item-btn2" id="takePictures2"></button>
        </div>
        <p>Lake Pictures</p>
    </div>
    <div class="center-bottom">
        <button class="item-btn2" type="submit" id="footer" onClick={this.submithandler}></button>
    </div>
</span>

      );
    }
    }


    export default App;