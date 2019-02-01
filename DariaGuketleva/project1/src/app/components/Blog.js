import React, {Component} from "react";
import Post from "./Post";



class Blog extends Component{
    render(props){
        const posts=this.props.posts;
        const postElements=posts.map((post, index)=><Post post={post} key={index}/>);

        return(
            <div>
                {postElements}
            </div>
        )
    }
}


export default Blog;