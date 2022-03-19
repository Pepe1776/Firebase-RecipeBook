<!-- <template>
  <div class="recipe">
    <router-link to="/">&lt; Back</router-link>
    <h1>{{ recipe.name }}</h1>
    <p class="desc">{{ recipe.description }}</p>
    <hr />
    <div class="ingredients">
      <h3>Ingredients</h3>
      <ul>
        <li v-for="(ingredient, i) in recipe.ingredients" v-bind:key="i">
          {{ ingredient }}
        </li>
      </ul>
    </div>
    <div class="method">
      <h3>Method</h3>
      <ol>
        <li v-for="(step, i) in recipe.methods" :key="i">
          {{ step }}
        </li>
      </ol>
    </div>
  </div>
</template> -->
<template>
  <router-link to="/">&lt; Back</router-link>
  <div class="card card-body mt-4">
    <h3>recipe</h3>
    <h1 class="title">{{ form.name }}</h1>
    <br />
    <p class="desc">{{ form.description }}</p>
    <div class="form-group mt-3">
      <label>Ingredients</label>
      <div class="ingredients">
        <ul>
          <li v-for="(ingredient, i) in form.ingredients" v-bind:key="i">
            {{ ingredient }}
          </li>
        </ul>
      </div>
    </div>
    <div class="form-group mt-3">
      <label>Methods</label>
      <div class="ingredients">
        <ol>
          <li v-for="(method, i) in form.methods" v-bind:key="i">
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
.recipe {
  padding: 1rem;
  max-width: 768px;
  margin: 0 auto;
}
.desc {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}
hr {
  margin-bottom: 1rem;
}
h3 {
  margin-bottom: 1rem;
}
.ingredients {
  padding: 1rem;
  background-color: #081c33;
  color: white;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}
.ingredients ul li {
  list-style-position: inside;
  line-height: 1.4;
  margin-bottom: 1rem;
}
.method ol li {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  list-style-position: inside;
  border-bottom: 1px solid #eee;
}
</style>
