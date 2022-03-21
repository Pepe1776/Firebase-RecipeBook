<template>
  <router-link class="back" to="/">&lt; Back</router-link>
  <div class="card card-body mt-4">
    <h3 class="title">Edit your recipe</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>description</label>
        <textarea
          v-model="form.description"
          class="form-control"
          type="email"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Ingredients</label>
        <div class="ingredient" v-for="i in form.ingredientRows" :key="i">
          <input
            v-model="form.ingredients[i - 1]"
            class="form-control"
            type="text"
            required
          />
        </div>
        <button class="" type="button" @click="addNewIngredient">
          Add Ingredient
        </button>
      </div>
      <div class="form-group mt-3">
        <label>Steps</label>
        <div class="method" v-for="i in form.methodRows" :key="i">
          <input
            v-model="form.methods[i - 1]"
            class="form-control"
            type="text"
            required
          />
        </div>
        <button type="button" @click="addNewStep">Add Step</button>
      </div>

      <div class="form-group">
        <label>Image Url</label>
        <input v-model="form.image" class="form-control" required />
      </div>
      <div class="button-con">
        <button type="submit" class="create">
          Update
        </button>
      </div>
    </form>
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
      form.ingredients = []
      form.methods = []
      form.ingredientRows = 1
      form.methodRows = 1
      form.image = ''
    }
    const addNewIngredient = () => {
      form.ingredientRows++
    }
    const addNewStep = () => {
      form.methodRows++
    }

    return { form, update, addNewIngredient, addNewStep }
  }
}
</script>

<style>
.title {
  font-family: 'lobster', cursive;
  font-size: 3.5rem;
  display: flex;
  justify-content: center;
  margin: 15px;
  margin-bottom: 3rem;
  text-shadow: 0px 8px 20px #04d3e2, 2px 10px 30px rgba(34, 250, 185, 0.986);
}
.btn::before,
.btn::after {
  content: '';
  display: block;
  position: absolute;
  inset: 0;
  z-index: -1;
}
.btn::after {
  background-color: #292929;
}
.btn::before {
  background-image: linear-gradient(to bottom right, #aeffb9 0%, #a091ff 100%);
  transition: transform 200ms;
}
.btn:hover::before,
.btn:focus::before {
  transform: scale(1.1);
}
</style>
