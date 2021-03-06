import { RECEIVE_ALL_PHOTOS, RECEIVE_PHOTO, REMOVE_PHOTO, RECEIVE_NEW_PHOTO, CHANGE_PHOTO } from "../actions/photo_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

const photosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    let photo;
    let photos;
    let like;
    let userId;
    let photoId;
    let comment; 
    let commentId;
    switch(action.type){
        case RECEIVE_ALL_PHOTOS:
            newState = merge({}, state, action.photos);
            return newState;
        case RECEIVE_NEW_PHOTO:
            newState = merge({}, state, {[action.payload.id]: action.payload});
            return newState;
        case RECEIVE_PHOTO:
            photo = action.payload; 
            // // ;
            // newState = merge({}, state, photos);
            newState = merge({}, state, {[photo.id]: photo});
            return newState;
        case CHANGE_PHOTO:
            newState = merge({}, state, {[action.payload.id]: action.payload});
            return newState;
        case RECEIVE_COMMENT:
            comment = action.comment;
            newState = Object.assign({}, state);
            photo = newState[comment.photo_id]
            photo.comment_ids.push(comment.id);
            // // ;
            photo.commenter_ids.push(comment.author_id);
            return newState
        case REMOVE_PHOTO:
            newState = merge({}, state)
            delete newState[action.id];
            return newState;
        case RECEIVE_LIKE: 
        // ;
            like = action.like;
            newState = merge({}, state);
            photo = newState[like.photo_id]
            photo.liker_ids.push(like.user_id);
            photo.like_ids.push(like.id);
        // ;
            return newState;
        case REMOVE_LIKE:
            photoId = action.payload.like.photo_id;
            userId = action.payload.like.user_id;
            photo = action.payload.photos[photoId]
            photo.liker_ids = photo.liker_ids.filter(id => id !== userId);
            photo.like_ids = photo.like_ids.filter(id => id !== action.payload.like.id);
            newState = merge({}, state, action.payload.photos);
            newState[photoId].liker_ids = photo.liker_ids;
            newState[photoId].like_ids = photo.like_ids;
            
            return newState;
        case RECEIVE_COMMENT:
            // ;
            comment = action.comment;
            photo = action.photo[comment.id]
            photo.comment_ids.concat([comment.id]);
            newState = merge({}, state, {photo});
            // photo = newState[comment.photo_id];
            // photo.comment_ids.push(comment.id);
            // ;
            return newState;
        case REMOVE_COMMENT:
            comment = action.comment;
            commentId = action.comment.id;
            photo = action.photo[comment.photo_id];
            photoId = comment.photo_id;
            photo.comment_ids = photo.comment_ids.filter(id => id !== commentId);
            // newState = merge({}, state, {[photo.id]: photo })
            newState = merge({}, state, action.photo )
             ;
            newState[photoId].comment_ids = photo.comment_ids;
            // // ;
            return newState;
        default: 
            return state;
    }
}

export default photosReducer;