<template id="items-template">
    <ul>
        <item-component :id="id" v-for="(item, index) in items" :item="item" :key="index"> </item-component>
    </ul>
</template>
<script>
import ItemComponent from './ItemComponent'
export default {
  name: 'items-component',
    props:{
      items: {
          type: Array,
          required: true
      },
        id: {
          type: [Number, String],
            required: true
        }
    },
  components: {
    'item-component': ItemComponent
  }
}

</script>
