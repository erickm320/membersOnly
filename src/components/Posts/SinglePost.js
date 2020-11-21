// import React, { Component } from 'react';

// class SingleComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             postInput: ''
//         }
//     }



//     handleInput = (val) => {
//         this.setState({ postInput: val })
//     }


//     render() {
//         console.log(this.props.id)
//         return (


//             <div>
//                 <p>{this.props.content}</p>
//                 <div>
//                     <input
//                         value={this.state.postInput}
//                         onChange={e => this.handleInput(e.target.value)} />
//                     <button
//                         className="PostEdit"
//                         onClick={() => this.props.edit(this.props.id, this.state.postInput)}>Edit Post</button>
//                 </div>

//                 <button className="PostDelete" onClick={() => this.props.remove(this.props.id)}>Delete Post</button>
//             </div>
//         )
//     }
// }

// export default SingleComponent;


import React, { useState } from 'react';

const SingleComponent = props => {
    let [postInput, setPostInput] = useState('')



    return (
        <div>
            <p>{props.content}</p>
            <div>
                <input
                    value={postInput}
                    onChange={e => setPostInput(e.target.value)} />
                <button
                    className="PostEdit"
                    onClick={() => props.edit(props.id, postInput)}>Edit Post</button>
            </div>

            <button className="PostDelete" onClick={() => props.remove(props.id)}>Delete Post</button>
        </div>
    )
}

export default SingleComponent