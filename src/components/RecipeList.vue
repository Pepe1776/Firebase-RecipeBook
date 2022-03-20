<template>
  <div class="container">
    <div class="grid">
      <!-- <div class="row">
        <div>
          <th scope="col">Name</th>
          <th scope="col">description</th>
          <th scope="col">Action</th>
        </div>
      </div> -->
      <div class="row">
        <div class="column">
          <div
            class="card"
            v-for="{ id, name, description, image } in recipes"
            :key="id"
          >
            <td class="list-name">{{ name }}</td>
            <td class="list-desc">{{ description }}</td>
            <td class="list-desc">
              <img :src="`${image}`" class="image" />
            </td>
            <td>
              <router-link :to="`/recipe/${id}`">
                <button class="">View Recipe</button>
              </router-link>
              <router-link :to="`/edit/${id}`">
                <button class="edit">
                  Edit
                </button>
              </router-link>
              <button class="delete" @click="deleterecipe(id)">
                Delete
              </button>
            </td>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLoadrecipes, deleterecipe } from '@/firebase'
export default {
  setup() {
    const recipes = useLoadrecipes()
    const deleteToggle = false
    return { recipes, deleterecipe, deleteToggle }
  }
}
</script>

<style scoped>
.container {
}
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: '';
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  margin: 20px;
  box-shadow: 0 8px 18px 0 rgba(0, 228, 245, 0.8);
  padding: 16px;
  text-align: center;
  background-color: rgb(221, 250, 234);
}
.list-name {
  font-size: 1.5rem;
  font-family: 'lobster', cursive;
  margin: 1rem;
}
.list-desc {
  font-size: 1.3rem;
  font-family: 'righteous', cursive;
  margin: 1rem;
}
.image {
  width: 200px;
  border-radius: 30px;
}
</style>
