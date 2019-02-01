import React, {Component} from "react";

class Post extends Component{
    render(props){


        return(
            <div>
                <h1>{this.props.post.title}</h1>
                <div>{this.props.post.postBody}</div>
            </div>
        )
    }
}


export default Post;