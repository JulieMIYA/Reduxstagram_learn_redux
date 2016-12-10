import React , {Component} from 'react';
import Photo from './Photo'


class PhotoGrids extends Component{
    render(){
        return (
            <div className="photo-grid">
                {/*<pre>
                    {JSON.stringify(this.props.posts,null,'')}
                </pre>*/}
                {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />) }
            </div>
        )
    }
}
export default PhotoGrids;