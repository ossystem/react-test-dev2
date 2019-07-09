import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../reducer';
import Login from '../../components/login';
import { userActions } from '../../actions';

export default connect(
  function mapStateToProps (store: AppState) {
    return {
      user: store.user,
    };
  },
  function mapDispatchToProps (dispatch: Dispatch) {
    return {
      signIn: (login: string, password: string): void => {
        userActions.signIn(dispatch, login, password);
      }
    };
  },
)(Login);
