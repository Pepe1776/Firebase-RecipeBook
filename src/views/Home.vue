<template>
  <div class="container">
    <router-link to="/add"><button>Add a Recipe</button></router-link>
    <recipeList />
  </div>
</template>

<script>
import recipeList from '@/components/RecipeList.vue'

export default {
  name: 'Home',
  components: { recipeList }
}
</script>
<style></style>
