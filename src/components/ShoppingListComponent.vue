<template>
  <div>
    <hr>
    <h2>{{ title }}</h2>
    <add-item-component :id="id" @add-item="addItem"></add-item-component>
    <items-component :id="id" :items="items"></items-component>
    <div class="footer">
      <hr/>
      <change-title-component :id="id" :title="title"></change-title-component>
    </div>
  </div>
</template>

<script>

import AddItemComponent from './AddItemComponent'
import ItemsComponent from './ItemsComponent'
import ChangeTitleComponent from './ChangeTitleComponent'

export default {
  name: 'shoppingListComponent',
  components: {
    'add-item-component': AddItemComponent,
    'items-component': ItemsComponent,
    'change-title-component': ChangeTitleComponent
  },

  props: [
    'items',
    'title',
    'id'
  ],

  data () {
    return {
    }
  },

  methods: {
    addItem (title) {
      this.items.push({
        text: title,
        checked: false
      })
      this.$emit('update-items', this.items)
    }
  }
}

</script>
