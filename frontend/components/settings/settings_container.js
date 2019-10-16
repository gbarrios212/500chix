import Settings from './settings';
import { connect } from 'react-redux';
import { clearUserErrors, 
        receiveUserErrors,
        updateUser
    } from '../../actions/user_actions';

const msp = (state) => {
    return({
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.photo
    })
}

const mdp = (dispatch) => ({
    clearUserErrors: () => dispatch(clearUserErrors()),
    receiveUserErrors: (errors) => dispatch(receiveUserErrors(errors)),
    updateUser: (user) => dispatch(updateUser(user))
})

export default connect(msp, mdp)(Settings);