import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: 'AIzaSyBHAkcg_iZXALPgXDhPX_2D2c82K2XVLms',
  authDomain: 'recipes-7b1be.firebaseapp.com',
  databaseURL: 'https://recipes-7b1be-default-rtdb.firebaseio.com',
  projectId: 'recipes-7b1be',
  storageBucket: 'recipes-7b1be.appspot.com',
  messagingSenderId: '721822125917',
  appId: '1:721822125917:web:667b2eec442533f3c522b4'
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
 export const recipesCollection = db.collection('recipes')

export const createrecipe = recipe => {
  return recipesCollection.add(recipe)
}

export const getrecipe = async id => {
  const recipe = await recipesCollection.doc(id).get()
  return recipe.exists ? recipe.data() : null
}

export const updaterecipe = (id, recipe) => {
  return recipesCollection.doc(id).update(recipe)
}

export const deleterecipe = id => {
  return recipesCollection.doc(id).delete()
}

export const useLoadrecipes = () => {
  const recipes = ref([])
  const close = recipesCollection.onSnapshot(snapshot => {
    recipes.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return recipes
}
