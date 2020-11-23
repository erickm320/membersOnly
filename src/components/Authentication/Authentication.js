// import axios from 'axios';
// import React, { Component } from 'react';
// import { getUser } from '../../redux/reducer';
// import { connect } from 'react-redux';
// import './Authentication.css';



// class Authentication extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//             verPassword: ''
//         }
//     }
      

//     handleInput = (event) => {
//         this.setState({ [event.target.name]: event.target.value })
//     }

//     handleRegister = (e) => {
//         e.preventDefault();
//         const { username, password, verPassword} = this.state;
//         if (password && password === verPassword) {
//             axios.post('/auth/register', { username, password })
//                 .then(res => {
//                     this.props.getUser(res.data);
//                     this.props.history.push('/');
//                 })
//                 .catch(err => console.log(err))
//         } else {
//             alert("Passwords don't match")
//         }
//     }

//     handleLogin = (e) => {
//         e.preventDefault();
//         const { username, password } = this.state;

//         axios.post('/auth/login', { username, password })
//             .then(res => {
//                 this.props.getUser(res.data);
//                 this.props.history.push('/Dashboard');
//             })
//             .catch(err => console.log(err))
//     }


//     render() {
//         return (
//             <body>
//                 <div className="authview">
//                     <section className='authbody'>
//                         <h1>Members Only</h1>
//                         <section className="login">
//                             <span className="text">Username: <input
//                                 value={this.state.username}
//                                 name='username'
//                                 placeholder='Username'
//                                 onChange={(e) => this.handleInput(e)} /></span>
//                             <span className="text1">Password: <input
//                                 type='password'
//                                 value={this.state.password}
//                                 name="password"
//                                 placeholder='Password'
//                                 onChange={(e) => this.handleInput(e)} /></span>
//                             <br />
//                             <button onClick={this.handleLogin} className="button1">Login</button>
//                             <button onClick={this.handleRegister} className="button2">Register</button>
//                         </section>
//                         <img src = "https://upload.wikimedia.org/wikipedia/commons/e/ee/Xxxtentacion_(cropped).jpg" alt="rapper" className="tentacion"/>
//                     </section>


//                 </div>
//             </body>

//         )
//     }
// }




import axios from 'axios';
import React, {useState } from 'react';
import { getUser } from '../../redux/reducer';
import { connect } from 'react-redux';
import './Authentication.css';


const Authentication = props => {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    function handleRegister(e) {
        e.preventDefault();
        axios.post('/auth/register', { username, password })
        .then(res => {
            props.getUser(res.data);
            props.history.push('/dashboard');
        })
        .catch(err => console.log(err))
    }

    function handleLogin(e)  {
        e.preventDefault();

        axios.post('/auth/login', { username, password })
            .then(res => {
                props.getUser(res.data);
                props.history.push('/Dashboard');
            })
            .catch(err => console.log(err))
    }




    return(
        <body>
        <div className="authview">
            <section className='authbody'>
                <h1>Members Only</h1>
                <section className="login">
                    <span className="text3">Username: <input
                        value={username}
                        name='username'
                        placeholder='Username'
                        onChange={(event) =>setUsername(event.target.value)} /></span>
                    <span className="text1">Password: <input
                        type='password'
                        value={password}
                        name="password"
                        placeholder='Password'
                        onChange={(event) =>setPassword(event.target.value)} /></span>
                    <br />
                    <button onClick={handleLogin} className="button1">Login</button>
                    <button onClick={handleRegister} className="button2">Register</button>
                </section>
                <img src = "https://upload.wikimedia.org/wikipedia/commons/e/ee/Xxxtentacion_(cropped).jpg" alt="rapper" className="tentacion"/>
            </section>


        </div>
    </body>

    )

}

export default connect(null, { getUser })(Authentication);