// import React, { Component } from 'react';
// import axios from 'axios';
// import { withRouter } from 'react-router';
// import { connect } from 'react-redux';
// import './Dashboard.css'

// class Dashboard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isEditing: false,
//             nameInput: ''
//         }
//     }

//     handleLogout = () => {
//         axios.get('/auth/logout')
//             .then(() => {
//                 this.props.history.push('/')
//             })
//             .catch(err => console.log(err))
//     }

//     getPosts = () => {
//         axios.get('/x/songs')
//             .then(() => {
//                 this.props.history.push('/song')
//             })
//     }

//     render() {
//         console.log(this.props)
//         return (
//             <section className="Body">
//                 <div className="dashboard">
//                     <h1 className="username"> Hello {this.props.user.user.username}</h1>
//                     <button onClick={this.getPosts}
//                         className="button3">
//                         Songs
//                     </button>
//                     <button onClick={this.handleLogout} className="button4">
//                         Logout
//                     </button>
//                 </div>
//                 <section>
//                     <img src="https://images7.alphacoders.com/929/929473.jpg" alt="rapper1" className='bluex' />
//                     <p className="text">Jahseh Onfroy was a controversial rapper for most of his early career. He passed away on the 18th of June, 2018. He was not of legal age yet and was turning his life around for the better. Despite his troubles in his youth, he maintained a steady fanbase and his real turn around came with his first official album. Titled 17, it was a collection of masterpieces way different from his previous songs on the platform Soundcloud. Despite many efforts of change and good acts many people harbored hate for the young rapper from alleged crimes that were later dismissed. He always stayed positive and helped thousands if not millions with his songs and their messages. A real role model after it was all said and done. Feel free to browse some of his music and leave a thought!</p>
//                 </section>
//             </section>
//         )
//     }
// }

// function mapStateToProps (reduxState) {
//     return reduxState
// }


// export default connect(mapStateToProps)(withRouter(Dashboard));

import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import './Dashboard.css'

const Dashboard = props => {
    

    function handleLogout()  {
        axios.get('/auth/logout')
            .then(() => {
                props.history.push('/')
            })
            .catch(err => console.log(err))
    }

    function getPosts()  {
        axios.get('/x/songs')
            .then(() => {
                props.history.push('/song')
            })
    }

    return(
        <section className="Body">
                <div className="dashboard">
                    <h1 className="username"> Hello {props.user.user.username}</h1>
                    <button onClick={getPosts}
                        className="button3">
                        Songs
                    </button>
                    <button onClick={handleLogout} className="button4">
                        Logout
                    </button>
                </div>
                <section>
                    <img src="https://images7.alphacoders.com/929/929473.jpg" alt="rapper1" className='bluex' />
                    <p className="text">Jahseh Onfroy was a controversial rapper for most of his early career. He passed away on the 18th of June, 2018. He was not of legal age yet and was turning his life around for the better. Despite his troubles in his youth, he maintained a steady fanbase and his real turn around came with his first official album. Titled 17, it was a collection of masterpieces way different from his previous songs on the platform Soundcloud. Despite many efforts of change and good acts many people harbored hate for the young rapper from alleged crimes that were later dismissed. He always stayed positive and helped thousands if not millions with his songs and their messages. A real role model after it was all said and done. Feel free to browse some of his music and leave a thought!</p>
                </section>
            </section>

    )
}

function mapStateToProps (reduxState) {
    return reduxState
}


export default connect(mapStateToProps)(withRouter(Dashboard));