<template>
  <router-link to="/">&lt; Back</router-link>
  <div class="card card-body mt-4">
    <h3>Edit recipes</h3>
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
      </div>

      <button type="submit" class="btn btn-primary  mt-3">
        Update
      </button>
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
      descrition: '',
      ingredients: [],
      methods: [],
      ingredientRows: 1,
      methodRows: 1
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
    })

    const update = async () => {
      await updaterecipe(recipeId.value, { ...form })
      router.push('/')
      form.name = ''
      form.email = ''
    }

    return { form, update }
  }
}
</script>

<style>
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
