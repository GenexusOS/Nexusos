import React,{Component} from 'react';
import Img1 from './images/index/wallpaper.jpg';
import Img2 from './images/index/flower1.png';
import "./dnd.css";
// import Img2 from './images/452063.jpg';
// import $ from 'jquery';

class App extends Component {
 constructor(props){
   super(props);
   let vam=document.getElementById("dod1");
// alert(vam);
dragElement(vam);

 }
 

// onmousedown = function(event) {

//     let b=event.target.id;
//     alert(b);

//     let ball=document.getElementById(b);
// console.log(ball);
    


dragElement=function(elmnt) {


  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// };


render(){
return (
  
<span>
  <div id="dod1" style={{backgroundColor:"red",position: "absolute",zIndex: "9",textAlign: "center", border: "1px solid #d3d3d3"}} onDrag={this.onmousedown}>
	<img  className="background-image1" src={Img1} alt="None"  />
    <p  style={{left:"12px;",top:"22px",position: "absolute",zIndex: "9",backgroundColor: "#f1f1f1",textAlign: "center", border: "1px solid #d3d3d3"}} >hello</p>
    </div>
    <img id="did26" src={Img2} style={{marginLeft:"82px",marginBottom:"-122px"}} alt="None"  />
    </span>
 
  );
}
}
export default App;