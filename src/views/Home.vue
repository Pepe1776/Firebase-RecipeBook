<template>
  <recipeCreate />
  <recipeList />
</template>

<script>
import recipeCreate from '@/components/RecipeCreate.vue'
import recipeList from '@/components/RecipeList.vue'

export default {
  name: 'Home',
  components: { recipeCreate, recipeList }
}
</script>
