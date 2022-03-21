<template>
  <div class="container">
    <div class="grid">
      <div
        class="card"
        v-for="{ id, name, description, image } in recipes"
        :key="id"
      >
        <td class="list-name">
          <router-link class="list-name" :to="`/recipe/${id}`">{{
            name
          }}</router-link>
        </td>
        <td class="list-desc">{{ description }}</td>
        <td class="list-desc">
          <router-link :to="`/recipe/${id}`"
            ><img :src="`${image}`" class="image"
          /></router-link>
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
          <router-link :to="`/delete/${id}`">
            <button class="delete">
              Delete
            </button>
          </router-link>
          <!-- <button
                class="delete"
                @click="() => TogglePopup('buttonTrigger')"
              >
                Delete
              </button> -->
          <!-- <button class="delete" @click="deleterecipe(id)">
                Delete
              </button> -->
        </td>
      </div>
    </div>
  </div>
  <div
    class="popup"
    id="popup"
    v-if="popupTriggers.buttonTrigger"
    :TogglePopup="() => TogglePopup('buttonTrigger')"
  >
    <div class="popup-inner">
      <h2 class="pop-text">Are you sure you want to delete?</h2>
      <button
        :key="id"
        v-for="{ id, name } in recipes"
        class="delete"
        @click="deleterecipe(id)"
      >
        delete {{ name }}
      </button>
      <button class="delete" @click="() => TogglePopup('buttonTrigger')">
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useLoadrecipes, deleterecipe } from '@/firebase'
export default {
  setup() {
    const recipes = useLoadrecipes()
    const popup = document.getElementById('popup')
    const popupTriggers = ref({
      buttonTrigger: false
    })
    const TogglePopup = trigger => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }

    return {
      recipes,
      deleterecipe,
      TogglePopup,
      popupTriggers,
      popup
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Righteous&display=swap');

.container {
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.column {
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
    display: inline-block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  box-shadow: 0 8px 18px 0 rgba(0, 228, 245, 0.8);
  padding: 16px;
  text-align: center;
  background-color: rgb(221, 250, 234);
}
.list-name {
  font-size: 2.5rem;
  text-shadow: 0px 8px 20px #04d3e2, 2px 10px 30px rgba(34, 200, 250, 0.986);
  font-family: 'lobster', cursive;
  margin: 1rem;
}
.list-desc {
  font-size: 1.3rem;
  font-family: 'righteous', cursive;
  margin: 1rem;
}
.image {
  display: flex;
  justify-content: center;
  width: 200px;
  border-radius: 30px;
  animation: all 2s ease-in-out;
}
.image:hover,
.image:focus {
  box-shadow: 0 8px 18px 0 rgba(0, 228, 245, 0.8);

  animation: all 2s ease-in-out;
  transform: translate(2px, 2px);
}
.pop-text {
  font-size: 3rem;
  color: var(--blue-dark);
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  align-items: center;
  justify-content: center;
}
.popup-inner {
  background: #fff;
  padding: 32px;
}
a:hover {
  color: var(--blue-dark);
}
</style>
