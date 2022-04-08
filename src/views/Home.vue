<template>
  <div class="container">
    <span v-if="isLoggedIn">
      <button @click="signOut">Logout</button>
    </span>
    <span v-else>
      <router-link to="login"><button>Login</button></router-link>
      <router-link to="register"><button>Register</button></router-link>
    </span>
    <router-link class="add" to="/add"
      ><button class="add">Add a Recipe</button></router-link
    >
    <recipeList />
    <p class="foot">Made by J Parker Dev</p>
  </div>
</template>

<script>
import recipeList from '@/components/RecipeList.vue'

export default {
  name: 'Home',
  components: { recipeList },
  data() {
    return {
      showModal: false
    }
  }
}
</script>
<script setup>
import { ref } from 'vue' // used for conditional rendering
import firebase from 'firebase'
import { useRouter } from 'vue-router'
import { onBeforeUnmount } from 'vue'
const router = useRouter()
const isLoggedIn = ref(true)
// runs after firebase is initialized
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    isLoggedIn.value = true // if we have a user
  } else {
    isLoggedIn.value = false // if we do not
  }
})
const signOut = () => {
  firebase.auth().signOut()
  router.push('/')
}

const authListener = firebase.auth().onAuthStateChanged(function(user) {
  if (!user) {
    // not logged in
    alert(
      'you must be logged in to view recipes! redirecting to the login page'
    )
    router.push('/login')
  }
})
onBeforeUnmount(() => {
  // clear up listener
  authListener()
})
</script>
<style>
.container {
  display: relative;
}
.add {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.foot {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}
</style>
