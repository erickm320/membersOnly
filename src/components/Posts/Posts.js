// import React, { Component } from 'react';
// import axios from 'axios';
// import './Post.css';
// import SinglePost from './SinglePost';




// // this.props.match.params.songid
// class Posts extends Component {
//     constructor() {
//         super();
//         this.state = {
//             posts: [],
//             text: ''
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.createPost = this.createPost.bind(this);
//         this.editPost = this.editPost.bind(this);
//         this.deletePost = this.deletePost.bind(this);
//     }

//     componentDidMount() {
//         axios
//             .get(`/api/posts/${this.props.match.params.songid}`).then(res => {
//                 this.setState({ posts: res.data });
//             })
//             .catch(err => console.log(err))

//     }

//     handleChange(event) {
//         this.setState({ text: event.target.value });
//     }

//     createPost(event) {
//         const { text } = this.state;

//         axios.post(`/api/posts/${this.props.match.params.songid}`, { text }).then(res => {
//             this.setState({ posts: res.data });
//         });

//         this.setState({ text: '' });

//     }

//     editPost(id, content) {
//         axios
//             .put(`/api/posts/${id}/${this.props.match.params.songid}`, { content })
//             .then(res => {
//                 this.setState({ posts: res.data })
//             })


//     }
//     deletePost = (id) => {
//         axios.delete(`/api/posts/${id}/${this.props.match.params.songid}`)
//             .then(res => {
//                 console.log(res.data)
//                 this.setState({ posts: res.data })

//             })
//             .catch(err => console.log(err));
//     }



//     render() {
//         console.log("This.state.posts", this.state.posts)

//         return (



//             // <div>
//             //     <h1>Songs</h1>
//             //  </div>

//             <div> {this.props.match.params.songid}<div id="Post_container">Leave a thought on the song!
//                 <div id="posts">
//                     <div id="posts1">
//                         {
//                             this.state.posts.map(post => {
//                                 { console.log("1", post) }
//                                 return <SinglePost id={post.post_id} key={post.post_id} content={post.content} edit={this.editPost} remove={this.deletePost} />
//                             })
//                         }
//                     </div>
//                 </div>
//                 <div id="newPost">
//                     <input placeholder="Thoughts? Enter Here"
//                         onChange={e => setPosts(e.target.value)}
//                         value={text}
//                     />
//                     <button onClick={createPost}>Create Post</button>
//                 </div>
//             </div>
//             </div>


//         )
//     }

// }

// export default Posts;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SinglePost from './SinglePost';
import './Post.css'

const Posts = props => {
    let [posts, setPosts] = useState([]);
    let [text, setText] = useState('');


    // useEffect(() => {
    //     axios
    //     .get(`/api/posts/${props.match.params.songid}`).then(res => {
    //         setPosts(res.data);
    //     })
    //     .catch(err => console.log(err))
    // }, [props.match.params.songid])

    function createPost() {

        axios.post(`/api/posts/${props.match.params.songid}`, { text }).then(res => {
            setPosts( res.data );
        });

        setText( '' );

    }

    function editPost(id, content) {
        axios
            .put(`/api/posts/${id}/${props.match.params.songid}`, { content })
            .then(res => {
                setPosts( res.data )
            })


    }
    function deletePost (id) {
        axios.delete(`/api/posts/${id}/${props.match.params.songid}`)
            .then(res => {
                console.log(res.data)
                setPosts(res.data)

            })
            .catch(err => console.log(err));
    }

    return (
        <div> {props.match.params.songid}<div id="Post_container">Leave a thought on the song!
        <div id="posts">
                <div id="posts1">
                    {
                        posts?.map(post => {
                            { console.log("1", post) }
                            return <SinglePost id={post.post_id} key={post.post_id} content={post.content} edit={editPost} remove={deletePost} />
                        })
                    }
                </div>
            </div>
            <div id="newPost">
                <input placeholder="Thoughts? Enter Here"
                    onChange={e => setText(e.target.value)}
                    value={text}
                />
                <button onClick={createPost}>Create Post</button>
            </div>
        </div>
        </div>
    )
}

export default Posts;