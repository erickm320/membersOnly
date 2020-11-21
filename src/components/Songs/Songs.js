// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
// import './Songs.css';
// import { Link } from 'react-router-dom';


// class Songs extends Component {



//     render() {
//         console.log(this.props)
//         return (
//             <section className="Songs">
//                 <div>
//                     <h1 className="username1"> Hello {this.props.user.user.username}</h1>
//                 </div>
//                 <br/>
//                 <div className="section1">
//                     <div>{this.props.songs[0].title}
//                         <Link to={`/posts/${this.props.songs[0].song_id}`}>  <img src={this.props.songs[0].image_url}
//                             className="tightrope"
//                             onClick={this.newPost}
//                             alt="tighrope" />
//                         </Link>

//                     </div>
//                     <div>{this.props.songs[1].title}
//                         <Link to={`/posts/${this.props.songs[1].song_id}`}>
//                             <img src={this.props.songs[1].image_url}
//                                 className="flores"
//                                 alt="flores" />
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="section2">
//                     <div>{this.props.songs[2].title}
//                         <Link to={`/posts/${this.props.songs[2].song_id}`}>
//                             <img src={this.props.songs[2].image_url}
//                                 className="revenge"
//                                 alt="revenge" />
//                         </Link>
//                     </div>
//                     <div>{this.props.songs[3].title}
//                         <Link to={`/posts/${this.props.songs[3].song_id}`}>
//                             <img src={this.props.songs[3].image_url}
//                                 className="afraid"
//                                 alt="afraid" />
//                         </Link>
//                     </div>

//                 </div>
//                 <div className="section3">
//                     <div>{this.props.songs[4].title}
//                         <Link to={`/posts/${this.props.songs[4].song_id}`}>
//                             <img src={this.props.songs[4].image_url}
//                                 className="angel"
//                                 alt="angel" />
//                         </Link>
//                     </div>
//                     <div>{this.props.songs[5].title}
//                         <Link to={`/posts/${this.props.songs[5].song_id}`}>
//                             <img src={this.props.songs[5].image_url}
//                                 className="manikin"
//                                 alt="manikin" />
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="section4">
//                     <div>{this.props.songs[6].title}
//                         <Link to={`/posts/${this.props.songs[6].song_id}`}>
//                             <img src={this.props.songs[6].image_url}
//                                 className="stop"
//                                 alt="stop" />
//                         </Link>
//                     </div>
//                     <div>{this.props.songs[7].title}
//                         <Link to={`/posts/${this.props.songs[7].song_id}`}>
//                             <img src={this.props.songs[7].image_url}
//                                 className="never"
//                                 alt="never" />
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="section5">
//                     <div>{this.props.songs[8].title}
//                         <Link to={`/posts/${this.props.songs[8].song_id}`}>
//                             <img src={this.props.songs[8].image_url}
//                                 className="vs"
//                                 alt="vs" />
//                         </Link>
//                     </div>
//                     <div>{this.props.songs[9].title}
//                         <Link to={`/posts/${this.props.songs[9].song_id}`}>
//                             <img src={this.props.songs[9].image_url}
//                                 className="broly"
//                                 alt="broly" />
//                         </Link>
//                     </div>
//                 </div>
//             </section >

//         );
//     }
// }

// function mapStateToProps(reduxState) {
//     return reduxState
// }

// export default connect(mapStateToProps)(withRouter(Songs));

import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './Songs.css';
import { Link } from 'react-router-dom';

const Songs = props => {
    return(
        <section className="section">
        <div>
            <h1 className="username1"> Hello {props.user.user.username}</h1>
        </div>
        <br/>
        <div className="section1">
            <div>{props.songs[0].title}
                <Link to={`/posts/${props.songs[0].song_id}`}>  <img src={props.songs[0].image_url}
                    className="tightrope"
                    // onClick={newPost}
                    alt="tighrope" />
                </Link>

            </div>
            <div>{props.songs[1].title}
                <Link to={`/posts/${props.songs[1].song_id}`}>
                    <img src={props.songs[1].image_url}
                        className="flores"
                        alt="flores" />
                </Link>
            </div>
        </div>
        <div className="section2">
            <div>{props.songs[2].title}
                <Link to={`/posts/${props.songs[2].song_id}`}>
                    <img src={props.songs[2].image_url}
                        className="revenge"
                        alt="revenge" />
                </Link>
            </div>
            <div>{props.songs[3].title}
                <Link to={`/posts/${props.songs[3].song_id}`}>
                    <img src={props.songs[3].image_url}
                        className="afraid"
                        alt="afraid" />
                </Link>
            </div>

        </div>
        <div className="section3">
            <div>{props.songs[4].title}
                <Link to={`/posts/${props.songs[4].song_id}`}>
                    <img src={props.songs[4].image_url}
                        className="angel"
                        alt="angel" />
                </Link>
            </div>
            <div>{props.songs[5].title}
                <Link to={`/posts/${props.songs[5].song_id}`}>
                    <img src={props.songs[5].image_url}
                        className="manikin"
                        alt="manikin" />
                </Link>
            </div>
        </div>
        <div className="section4">
            <div>{props.songs[6].title}
                <Link to={`/posts/${props.songs[6].song_id}`}>
                    <img src={props.songs[6].image_url}
                        className="stop"
                        alt="stop" />
                </Link>
            </div>
            <div>{props.songs[7].title}
                <Link to={`/posts/${props.songs[7].song_id}`}>
                    <img src={props.songs[7].image_url}
                        className="never"
                        alt="never" />
                </Link>
            </div>
        </div>
        <div className="section5">
            <div>{props.songs[8].title}
                <Link to={`/posts/${props.songs[8].song_id}`}>
                    <img src={props.songs[8].image_url}
                        className="vs"
                        alt="vs" />
                </Link>
            </div>
            <div>{props.songs[9].title}
                <Link to={`/posts/${props.songs[9].song_id}`}>
                    <img src={props.songs[9].image_url}
                        className="broly"
                        alt="broly" />
                </Link>
            </div>
        </div>
    </section >

    )
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps)(withRouter(Songs));