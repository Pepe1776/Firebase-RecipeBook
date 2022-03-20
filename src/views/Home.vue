<template>
  <div class="container">
    <router-link class="add" to="/add"
      ><button class="add">Add a Recipe</button></router-link
    >
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
</style>
