import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();


// How to query
firestore.collection('users').doc('uoakIvumUTPk556A76Qj').collection('cartItems').doc('LfeApZWx1voP6eOZ137m')
firestore.doc('/users/uoakIvumUTPk556A76Qj/cartItems/LfeApZWx1voP6eOZ137m') //Same as above
firestore.collection('/users/uoakIvumUTPk556A76Qj/cartItems') //Querying cart items for this user