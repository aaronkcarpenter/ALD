const firebase = require('firebase');
require('firebase/firestore');

const { inventory_items, shopping_cart, 
        users,address, user_session, 
        order_item, cart_detail, order,
        shipping, payment, credit_card } = require('./testData');

var firebaseConfig = {
  apiKey: "AIzaSyCGtpXvKcsOpfhF_sRrhB4dQhoaKio89ds",
  authDomain: "app-academy-capstone-project.firebaseapp.com",
  databaseURL: "https://app-academy-capstone-project.firebaseio.com",
  projectId: "app-academy-capstone-project",
  storageBucket: "app-academy-capstone-project.appspot.com",
  messagingSenderId: "175261622378",
  appId: "1:175261622378:web:5edc8b65c2f3d1dcdbea13",
  measurementId: "G-BKYJ0WYRRN"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// db.collection(inventory_items).doc('shirt').set({
//   name: 'Pullover 1',
//   category: 'winter',
//   collection: 'Fall'
// })
// .then(function() {
//   console.log('DONE BRUH!');
// })
// .catch(function(error) {
//   console.error("Error writing document: ", error);
// });

db.collection("inventory_items").add({
  name: "Pullover 1",
  category: "Winter",
  collection: 'Fall'
})
  .then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function (error) {
    console.error("Error adding document: ", error);
  });