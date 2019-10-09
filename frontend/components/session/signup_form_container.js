import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up'
    };
};

const mapdDspatchToProps = (dispatch, ownProps) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        demoLogin: () => dispatch(login({username: "guest", password: "guest"})),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(
    mapStateToProps,
    mapdDspatchToProps
)(SessionForm);