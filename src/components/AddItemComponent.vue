<template id="add-item-template">
    <div class="input-group">
        <input @keydown.enter="addItem" v-model="newItem"
                    placeholder="add shopping list item" type="text"
                    class="form-control" name="item">
        <span class="input-group-btn">
            <button  id="add" @click="addItem" class="btn btn-default" type="button">Add!</button>
        </span>
        <span id="error" v-if="isEmpty"> {{ error }}</span>
    </div>
</template>
<script>
export default {
  name: 'add-item-component',
  props: ['id'],
  data: function () {
    return {
      newItem: '',
      error: 'please fill the shopping list title',
      isEmpty: false
    }
  },

  methods: {
    addItem () {
        if(this.newItem.trim().length === 0){
            this.isEmpty = true;
            return

        }

        this.$emit('add-item', this.newItem.trim())
        this.newItem = ''
        this.$store.dispatch('updateList', this.id)

    }
  }
}

</script>
