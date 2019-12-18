import React from 'react';
import { Link } from 'react-router-dom';

const PhotosIndexItem = (props) => {
    // // ;
    return (
        
            <div className="follow-items-list-items">

                <Link to={`/photos/${props.photo.id}`}>
                    <img src={props.photo.photoUrl} className="index-thumbnail" alt=""></img>
                    {/* {photo.author.username} */}
                </Link>
                <div className="follow-modal">
                    <Link to={`/users/${props.authorId}`}>
                        <div className="follow-author-info">
                            <div className="follow-avatar-container">
                                <img src={props.authorPic} className="follow-avatar"/>
                            </div>
                            <div className="follow-name">{props.author}</div>
                        </div>
                    </Link>
                    <div className="follow-info">
                        <div className="index-icons">
                            <div className="index-icons-likes">
                                <i className="far fa-heart" id="index-heart"></i>{props.photo.like_ids.length}
                            </div>
                            <div className="index-icons-comments">
                                <i class="far fa-comment"></i>{props.photo.comment_ids.length}
                            </div>
                        </div>
                        <p className="index-photo-title">
                            {props.photo.name}
                        </p>
                    </div>
                </div>
              
                 
                
            </div>
        
    )
}

export default PhotosIndexItem;