import Settings from './settings';
import { connect } from 'react-redux';
import { clearUserErrors, 
        receiveUserErrors,
        updateUser,
        fetchUser,
    } from '../../actions/user_actions';
import { fireSuccess } from '../../actions/alert_actions';

const msp = (state) => {
    return({
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.photo
    })
}

const mdp = (dispatch) => ({
    clearUserErrors: () => dispatch(clearUserErrors()),
    receiveUserErrors: (errors) => dispatch(receiveUserErrors(errors)),
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fireSuccess: (string) => dispatch(fireSuccess(string))
})

export default connect(msp, mdp)(Settings);