import React , {Component} from 'react'
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group'

export default class Photo extends Component{

    render(){
        const {post, i, increment, comments } = this.props;
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/views/${post.code}`}>
                        <img src={post.display_src}
                             alt={post.caption}
                             className="grid-photos"/>
                    </Link>
                    <CSSTransitionGroup transitionName="like"
                        transitionEnterTimeout= {400}
                        transitionLeaveTimeout= {400}>
                        <span key={post.likes} className="likes-heart">{post.likes}</span>
                    </CSSTransitionGroup>
                </div>
                <figcaption>
                    <p>{post.caption}</p>
                    <div className="control-buttons">
                        <button className="likes" onClick={increment.bind(null,i)}>
                            &hearts; {post.likes}
                        </button>
                        <Link className="button" to={`/views/${post.code}`}>
                            <span className="comment-count">
                                <span className="speech-bubble"></span>
                                {comments[post.code]? comments[post.code].length:0}
                            </span>

                        </Link>
                    </div>
                </figcaption>
            </figure>
        )
    }
}