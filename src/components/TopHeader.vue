<template>
  <div class="login">
    <!-- Logged in -->
    <!-- <div v-if="loggedIn">Yes</div> -->
    <!-- <div v-else>No</div> -->
    <button v-if="!loggedIn" class="but" @click="signOut">Sign out</button>
   <button v-else-if="LoggedIn" class="Login">Login</button>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  name: 'top-header',
  mounted() {
    this.setupFirebase()
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log('signed in')
          this.loggedIn = true
        } else {
          // No user is signed in.
          this.loggedIn = false
          console.log('signed out', this.loggedIn)
        }
      })
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: 'login' })
        })
    }
  },
  data() {
    return {
      loggedIn: false
    }
  }
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  color: inherit;
}
</style>
