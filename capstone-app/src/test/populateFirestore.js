const firebase = require('firebase');
require('firebase/firestore');

// Import the seed data (each table) from the seed data file
const { inventory_items, shopping_cart, users,
  address, user_session, order_item, cart_detail, order,
  shipping, payment, credit_card  } = require('./testData');

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

function populateCollection(collectionName, items) {
  return Promise.all(items.map(item => {
    const { id, ...data } = item;
    return db.collection(collectionName)
      .doc(id)
      .set(data);
  }));
}



Promise.all([
  populateCollection('inventory_items', inventory_items),
  // populateCollection('shopping_cart', shopping_cart),
  // populateCollection('users', users),
  // populateCollection('address', address),
  // populateCollection('user_session', user_session),
  // populateCollection('order_item', order_item),
  // populateCollection('cart_detail', cart_detail),
  // populateCollection('order', order),
  // populateCollection('shipping', shipping),
  // populateCollection('payment', payment),
  // populateCollection('credit_card', credit_card)
])
.then(() => {
  console.log('Done!');
  process.exit(0);
})
.catch(err => {
  console.log(err);
})