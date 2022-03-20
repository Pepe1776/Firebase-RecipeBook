<template>
  <router-link to="/">&lt; Back</router-link>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Description</label>
        <textarea v-model="form.description" class="form-control" required />
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
        <label>Methods</label>
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

      <button type="submit" class="create">
        Create recipe
      </button>
    </form>
  </div>
</template>

<script>
import { createrecipe } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({
      name: '',
      description: '',
      ingredients: [],
      methods: [],
      ingredientRows: 1,
      methodRows: 1
    })

    const onSubmit = async () => {
      await createrecipe({ ...form })
      form.name = ''
      form.description = ''
      form.ingredients = []
      form.methods = []
      form.ingredientRows = 1
      form.methodRows = 1
    }
    const addNewIngredient = () => {
      form.ingredientRows++
    }
    const addNewStep = () => {
      form.methodRows++
    }
    return { form, onSubmit, addNewIngredient, addNewStep }
  }
}
</script>

<style>
.create {
  display: flex;
  justify-content: center;
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
