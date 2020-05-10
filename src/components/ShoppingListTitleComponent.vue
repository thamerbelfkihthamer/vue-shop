<template>
  <a
    :class="[index === 0 ? 'active': '', 'nav-link']"
    data-toggle="tab"
    :href="href"
    role="tab"
    aria-selected="true">
    {{ title }}
    <span id="delete" @click="deleteShopping(id)">
        <font-awesome-icon icon="trash"/>
      </span>
  </a>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'ShoppingListTitleComponent',

  components: {
    'font-awesome-icon': FontAwesomeIcon
  },

  props:{
    id: {
      type: [String, Number],
      required: true
    },
    title: {
      type: [String, Number],
      required: true
    },
    index:{
      type: [String, Number],
      required: true
    }
  },

  computed: {
    href () {
      return '#tab-' + this.id
    }
  },
  methods: {
    deleteShopping(id){
      this.$store.dispatch('deleteShoppingList', id);
    }
  }
}
</script>
