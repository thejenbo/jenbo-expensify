import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = (props) => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logIn = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogOut = (props) => {
    return () => {
        return firebase.auth().signOut();
    };
};

export const logOut = () => ({
    type: 'LOGOUT'
});
