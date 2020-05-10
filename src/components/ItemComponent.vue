<template id="item-template">
    <li :class="{ 'removed': item.checked }">
        <div class="checkbox">
            <label>
                <input type="checkbox" v-model="item.checked"  id="check" @click="toggleCheckbox"> {{ item.text }}
            </label>
        </div>
    </li>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'item-component',
  props: ['item', 'id'],
  watch: {
    'item.checked': function () {
      this.updateList(this.id)
    }
  },

  methods:{
      ... mapActions(['updateList']),

      toggleCheckbox(){
          this.item.checked = !this.item.checked;
          this.updateList(this.id)
      }
  }
}
</script>
