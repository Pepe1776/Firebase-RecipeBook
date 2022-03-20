
<template>
  <router-link class="back" to="/">&lt; Back</router-link>
  <div class="card card-body mt-4">
    <h3 class="title">{{ form.name }}</h3>
    <img :src="`${form.image}`" class="image" />
    <br />
    <p class="desc">{{ form.description }}</p>
    <div class="form-group mt-3">
      <label class="label">Ingredients</label>
      <div class="ingredients">
        <ul>
          <li v-for="(ingredient, i) in form.ingredients" v-bind:key="i">
            {{ ingredient }}
          </li>
        </ul>
      </div>
    </div>
    <div class="form-group mt-3">
      <label class="label">Methods</label>
      <div class="ingredients">
        <ol>
          <li
            class="methods"
            v-for="(method, i) in form.methods"
            v-bind:key="i"
          >
            {{ method }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getrecipe, updaterecipe } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const recipeId = computed(() => route.params.id)

    const form = reactive({
      name: '',
      description: '',
      ingredients: [],
      methods: [],
      ingredientRows: 1,
      methodRows: 1,
      image: ''
    })
    onMounted(async () => {
      const recipe = await getrecipe(recipeId.value)
      console.log(recipe, recipeId.value)
      form.name = recipe.name
      form.description = recipe.description
      form.ingredients = recipe.ingredients
      form.methods = recipe.methods
      form.ingredientRows = recipe.ingredientRows
      form.methodRows = recipe.methodRows
      form.image = recipe.image
    })

    const update = async () => {
      await updaterecipe(recipeId.value, { ...form })
      router.push('/')
      form.name = ''
      form.description = ''
    }
    const imgSrc = form.image

    return { form, update, imgSrc }
  }
}
</script>

<style scoped>
.image {
  width: 100%;
  object-fit: scale-down;
  aspect-ratio: 16 / 4;
}
.recipe {
  padding: 1rem;
  max-width: 768px;
  margin: 0 auto;
}
.desc {
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
hr {
  margin-bottom: 1rem;
}
h3 {
  font-family: 'lobster', cursive;
  font-size: 3.5rem;
  display: flex;
  justify-content: center;
  margin: 15px;
  margin-bottom: 3rem;
  text-shadow: 0px 8px 20px #04d3e2, 2px 10px 30px rgba(34, 250, 185, 0.986);
}
.ingredients {
  padding: 1rem;
  background-color: var(--blue-dark);
  color: white;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}
.ingredients ul li {
  list-style-position: inside;
  line-height: 1.4;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}
.methods {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  list-style-position: inside;
  border-bottom: 1px solid #eee;
}
</style>
