import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDK4_Uj1Vjq9FyOblSA6Ln5CIprxBZp-90",
    authDomain: "facebook-clone-360e6.firebaseapp.com",
    projectId: "facebook-clone-360e6",
    storageBucket: "facebook-clone-360e6.appspot.com",
    messagingSenderId: "920004144420",
    appId: "1:920004144420:web:feb6ae0b7a87d30d9197b1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db