import { connect } from 'redux';
import App from '../component/App';
import firebase from './firebase/firebase';

const provider = new firebase.auth.FacebookAuthProvider();

const mapStateToProps = state => {
  return {
    isStart: state.isStart,
    user: state.user,
    level: state.level,
    mode: state.mode,
    theme: state.theme,
    authenticated: false
  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer