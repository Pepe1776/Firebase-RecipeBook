import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyBHAkcg_iZXALPgXDhPX_2D2c82K2XVLms",
  authDomain: "recipes-7b1be.firebaseapp.com",
  databaseURL: "https://recipes-7b1be-default-rtdb.firebaseio.com",
  projectId: "recipes-7b1be",
  storageBucket: "recipes-7b1be.appspot.com",
  messagingSenderId: "721822125917",
  appId: "1:721822125917:web:667b2eec442533f3c522b4"
};

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
