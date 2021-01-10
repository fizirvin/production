import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAWicUYiHtQgepszKlIPgN4JnFfA85HYB4',
  authDomain: 'injection-e43e8.firebaseapp.com',
  projectId: 'injection-e43e8',
  storageBucket: 'injection-e43e8.appspot.com',
  messagingSenderId: '639361002242',
  appId: '1:639361002242:web:02379ffe1c012d3a51b01b',
  measurementId: 'G-L8B884QP1Q'
}

firebase.initializeApp(firebaseConfig)

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`images/${file.name}`)
  const task = ref.put(file)
  return task
}
