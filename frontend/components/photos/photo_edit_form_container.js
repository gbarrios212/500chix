import { deletePhoto, receivePhoto, fetchPhoto } from '../../actions/photo_actions';
import { connect } from 'react-redux'
import { updatePhoto, clearErrors, receiveErrors } from '../../actions/photo_actions';
import PhotoEditForm from './photo_edit_form';
import { receiveActivePhotoId, clearActivePhotoId } from '../../actions/active_photo_actions';
import { fireSuccess, clearSuccess } from '../../actions/alert_actions';

const msp = (state, ownProps) =>{
    let currentUser = state.entities.users[state.session.id];
    let photoId = state.ui.activePhotoId;
    let photo = state.entities.photos[photoId] || { name: "", 
        category: "",
        location: "",
        lat: "",
        long: "",
        date_taken: "",
        camera: "",
        lens: "",
        focal_length: "",
        aperture: "",
        shutter_speed: "",
        iso: "",
        description: ""}
    return ({
        photo: photo,
        currentUser,
        photoId,
        errors: state.errors.photo
    })
}


const mdp = (dispatch) => ({
    updatePhoto: (photo) => dispatch(updatePhoto(photo)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    fetchPhoto: (id) => dispatch(fetchPhoto(id)),
    clearErrors: () => dispatch(clearErrors()),
    receivePhotoErrors: (errors) => dispatch(receiveErrors(errors)), 
    receiveActivePhotoId: (photo) => dispatch(receiveActivePhotoId(photo)),
    clearActivePhotoId: () => dispatch(clearActivePhotoId()),
    fireSuccess: (message) => dispatch(fireSuccess(message))
})

  export default connect(msp, mdp)(PhotoEditForm);
  