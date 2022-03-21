<!-- <template>
  <div class="popup">
    <div class="popup-inner">
      <slot />
      <button class="popup-close" @click="TogglePopup()">
        Cancel
      </button>
      <button
        props="deleteRecipe"
        class="popup-close"
        @click="deleterecipe(id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { deleterecipe, recipesCollection } from '../firebase'
export default {
  props: ['TogglePopup'],
  setup() {
    const deleterecipe = id => {
      return recipesCollection.doc(id).delete()
    }
    return { deleterecipe }
  }
}
</script>

<style scoped>
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
</style> -->
