import { connect } from 'react-redux';
import { Store, Dispatch } from 'redux';
import { AppState } from '../reducer';
import Root from '../components/root';
import { USER } from '../types';

export default connect(
  function mapStateToProps (store: AppState) {
    return {
      user: store.user,
    };
  },
  null
)(Root);
