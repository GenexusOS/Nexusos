import React,{Component} from 'react';
import './css_comp/login/login.css';
import Img5 from './images/login/info.png';
import Img6 from './images/login/logo1.png';
import Img7 from './images/login/logo4.png';
import axios from 'axios';
import swal from 'sweetalert';
// import $ from 'jquery';
// import {NavLink} from 'react-router-dom';



class App extends Component {
    constructor(props){
        super(props);
        this.state={
            email:null,
            password:null,
        };
        // this.changehandler=this.changehandler.bind();
    }

    changehandler=(event)=> {
        let name=event.target.name;
        let val=event.target.value;
        this.setState({
            [name]:val
        })
    }

    loginsubmithandler=(event)=>{
        event.preventDefault();
        // alert("login: "+"\n"+"email: "+this.state.email+"\n"+"password: "+this.state.password);
        const userobj={
            email:this.state.email,
            password:this.state.password
        }
        // console.log(userobj);

        axios.post("http://13.58.62.233:8000/api/v1/login/",userobj)
        .then((response)=>{
            // for (let i=0;i<response.data.length;i++){
            if (JSON.stringify(response.status)==200)
            {
                // setTimeout( ()=>{window.location="/index";} ,1800);
                // swal("Success");
                window.location="/index";
                // break;
            }
        }
    // }
        )
        .catch(
                (err)=>{
                    let variable1=JSON.stringify( err );
            if (String(variable1).includes("400"))
            {
                alert("Error");
            }
                }
            )
        

        // .then(response=>{
        //         for (let i=0;i<response.data.length;i++)
        //         {
        //         if ('"'+this.state.email+'"'===JSON.stringify(response.data[i].email))
        //         {
        //             if ('"'+this.state.password+'"' === JSON.stringify(response.data[i].password)){
        //         setTimeout( ()=>{
        //             window.location="/index";
        //         } ,1800);
        //         console.log(this.state.password);
        //         console.log(JSON.stringify(response.data[i].password));
        //         swal("Welcome!");
        //         break;
        //             }
        //         }
        //         else{
        //             swal("Error! Email or Password Don't Match.");
        //         }
        //     }
        // })
    }

    signupsubmithandler=(event)=>{
        event.preventDefault();
        // alert("signup: "+"\n"+"email: "+this.state.email+"\n"+"password: "+this.state.password);
        const userobj1={
            email:this.state.email,
            password:this.state.password
        }
         // console.log(userobj1);

         axios.post("http://13.58.62.233:8000/api/v1/signup/",userobj1)
         .then((response)=>{
             alert(JSON.stringify(response));
         })
         .catch(
             (err)=>{
                 alert(JSON.stringify(err));
             }
         )
    }

    
render(){
    return (
<span>
    <img id="logoInfo" src={Img5} alt="None" />
    <img id="logo1" src={Img6} alt="None" />
    <img id="logo4" src={Img7} alt="None" />
    <div id="info">
        <input class="cssname1 input1" style={{textAlign: "center"}} type="email" name="email" onChange={this.changehandler} placeholder="username" required />
        <input class="cssname1 input1" style={{textAlign: "center"}} type="password" name="password" onChange={this.changehandler} placeholder="password" required />
        <button id="loginbtn" type="submit" onClick={this.loginsubmithandler} class="button1 btn1-lg btn btn-outline-secondary">Login</button>
        <button id="signupbtn" type="submit" onClick={this.signupsubmithandler} class="button1 btn1-lg btn btn-outline-secondary">Sign Up</button>
    </div>
</span>

      );
    }
    }


    export default App;