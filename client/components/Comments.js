import React, {Component} from 'react'

export default class Comments extends Component{
    renderComments(comment, i){
        //console.log(this);
        const {postId} = this.props.params;
        return(
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null,postId, i)}>
                        &times;</button>
                </p>
            </div>
        );
    }
    handleSubmit(e){
        e.preventDefault();
        const {postId} = this.props.params;
        this.props.addComment(postId, this.refs.auther.value, this.refs.comment.value);
        this.refs.commentForms.reset();
    }
    render(){
        return (
            <div className="comments">
                {this.props.postComments.map((comment,i)=>this.renderComments(comment,i) )
                /*this.props.postComments.map(this.renderComments, this)*/}

                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="auther" placeholder="auther"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
}