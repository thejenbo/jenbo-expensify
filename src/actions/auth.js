import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = (props) => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLogOut = (props) => {
    return () => {
        return firebase.auth().signOut();
    };
};
