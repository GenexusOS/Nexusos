import React,{Component} from 'react';
import './css_comp/settings/settings.css';
// import Img60 from './images/index/loading.png';
// import Img61 from './images/index/mic.png';
// import Img62 from './images/index/weather.png';
import tip from './multi-tab.svg';
// import $ from 'jquery';
// import {NavLink} from 'react-router-dom';
var sectionStyle = {
    background: "#f3f3f3",
  };


class App extends Component {

    changehandler1=(event)=> {
        document.getElementById("slider1").oninput = function() {
            this.style.background = 'linear-gradient(to right, #696969 0%,#696969 ' + this.value + '%, #fff ' + this.value + '%, white 100%)';
        };
    }

    changehandler2=(event)=> {
        document.getElementById("slider2").oninput = function() {
            this.style.background = 'linear-gradient(to right, #696969 0%,#696969 ' + this.value + '%, #fff ' + this.value + '%, white 100%)';
        };
    }
    componentDidMount(){
        document.body.style.background = "white";
       }
  
       
    
    
    
    
render(){
    return (
<span>

        <div class="bar">
        <div class="ui-titlebar">
            <span class="caret">

            </span>
            <input class="search" type="text" placeholder="Search" />
            <div class="ui-titletext">

            </div>
            <button class="copy-paste button3">
            <img style={{width: "18px"}} src={tip} alt="minimize" />
            </button>
            <button class="ui-btn minimize button3">
                    <svg x="0px" y="0px" viewBox="0 0 10.2 1" >
                        <rect x="0" y="50%" width="10.2" height="1" />
                    </svg>
            </button>
            <button class="ui-btn maximize button3">
                <svg viewBox="0 0 10 10">
                    <path d="M0,0v10h10V0H0z M9,9H1V1h8V9z" />
                </svg>
            </button>
            <button class="ui-btn close button3">
                <svg viewBox="0 0 10 10">
                    <polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1" />
                </svg>
            </button>
        </div>

    </div>
    <div class="setting">
        <div class="container">
            <div class="row">
                <div class="firstColumn col-sm-4">
                    <button class="firstPanel button3">Nexus Deluxe</button>
                    <button class="firstPanel button3">OS version</button>
                    <button class="firstPanel button3">OS usage</button>
                    <button class="firstPanel button3">network</button>
                    <button class="firstPanel button3">mode</button>
                    <button class="firstPanel button3">apps</button>
                    <button class="firstPanel button3">collected information</button>
                    <button class="firstPanel button3">control center</button>
                    <button class="firstPanel button3">customization</button>
                    <button class="firstPanel button3">about Nexus</button>
                    <button class="firstPanel button3">contact Nexus</button>
                    <button class="firstPanel button3">account</button>
                </div>
                <div class="secondColumn col-sm-4">
                    <div class="row conrtainerr">
                        <div class="secondColumn1 col-sm">
                            <h5>Nexus Deluxe</h5>
                            <button class="subscribed button3">Subscribed for $24.99/month</button>
                            <h5 class="unubscribed"><a href=".">Unsubscribe</a></h5>
                            <h5>*1 terabyte of storage</h5>
                            <h5>*1 teraflop of compute</h5>
                        </div>
                        <div class="secondColumn2 col-sm">
                            <h5>Referals</h5>
                            <h5>Your referrer's wallet ID:</h5>
                            <input class="empty" type="text" />
                            <h5>Get $20 of Nexus cash woth every Deluxe referral.</h5>
                        </div>
                        <div class="secondColumn3 col-sm">
                            <h5>Nexus Gratis</h5>
                            <h5>*100 gigabytes of storage</h5>
                            <h5>*100 gigafloops of compute</h5>
                        </div>
                    </div>
                </div>
                <div class="thirdColumn col-sm-4">
                    <div class="thirdColumn1">
                        <h5>Storage</h5>
                        <h5>1Tb</h5>
                        <h5>$12.49/m</h5>
                    </div>
                    <input id="slider1" onChange={this.changehandler1} type="range" min="1" max="100" value="0" class="slider" />
                    <div class="thirdColumn2">
                        <h5>Compute</h5>
                        <h5>1Tflop</h5>
                        <h5>$12.49/m</h5>
                    </div>
                   
                    <input id="slider2" onChange={this.changehandler2} type="range" min="1" max="100" value="0" class="slider" />
                </div>
            </div>
        </div>
    </div>
    </span>

      );
    }
    }


    export default App;