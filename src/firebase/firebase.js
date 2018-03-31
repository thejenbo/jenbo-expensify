import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAEeK0g9cazyUx4UJ5gvL1IAF1iy1BWC3w",
    authDomain: "jenbo-expensify.firebaseapp.com",
    databaseURL: "https://jenbo-expensify.firebaseio.com",
    projectId: "jenbo-expensify",
    storageBucket: "jenbo-expensify.appspot.com",
    messagingSenderId: "709461079249"
};

firebase.initializeApp(config);

export const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses);
// });

// database.ref('expense').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.value());
// });

// database.ref('expense').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.value());
// });
