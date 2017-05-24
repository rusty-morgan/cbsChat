var config = {
    apiKey: "AIzaSyAeehijCd9Qcni01ZAvHwg7Z_KO7mBlSjc",
    authDomain: "cbschat-37108.firebaseapp.com",
    databaseURL: "https://cbschat-37108.firebaseio.com",
    projectId: "cbschat-37108",
    storageBucket: "cbschat-37108.appspot.com",
    messagingSenderId: "295539827152"
};
firebase.initializeApp(config);

angular.module('cbsChat', ['firebase', 'ngAnimate']);