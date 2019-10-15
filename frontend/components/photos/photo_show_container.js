import PhotoShow from './photo_show';
import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';

const msp = (state, ownProps) => {
    // debugger;
    return({ 
        currentUser: state.entities.users[state.session.id],
        photo: state.entities.photos[ownProps.match.params.photoId]
    });
}

const mdp = (dispatch) => ({
    fetchPhoto: (id) => dispatch(fetchPhoto(id))
})

export default connect(msp, mdp)(PhotoShow)