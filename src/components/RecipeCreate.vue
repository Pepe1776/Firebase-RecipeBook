<template>
  <router-link class="back" to="/">&lt; Back</router-link>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label class="label">Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label class="label">Description</label>
        <textarea v-model="form.description" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label class="label">Ingredients</label>
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
        <label class="label">Methods</label>
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
      <div class="image form-group">
        <label class="label" for="image url">Image Url</label>
        <input type="text" v-model="form.image" class="form-control" />
      </div>
      <div class="button-con">
        <button type="submit" class="create">
          Create Recipe
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { createrecipe } from '@/firebase'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const form = reactive({
      name: '',
      description: '',
      ingredients: [],
      methods: [],
      ingredientRows: 1,
      methodRows: 1,
      image: ''
    })

    const onSubmit = async () => {
      await createrecipe({ ...form })
      form.name = ''
      form.description = ''
      form.ingredients = []
      form.methods = []
      form.ingredientRows = 1
      form.methodRows = 1
      form.image = ''
      router.push('/')
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
.back {
  font-family: 'lobster', cursive;
  font-size: 2.2rem;
  margin-left: 1rem;
  text-decoration: none;
  transition: all 0.5s ease;
}
.back:hover {
  color: var(--blue-darkest);
  text-shadow: 0 8px 18px var(--main);
  border-radius: 30px;
  padding: 5px;
  transform: scale(1.02);
}
label {
  font-family: 'righteous', cursive;
  font-size: 1.4rem;
}
.label {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form-control {
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.method {
  display: flex;
}
.button-con {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
}
.create {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
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
