<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" v-for="(list, index) in shoppingList" :key="index">
        <shopping-list-title-component :id="list.id" :title="list.title" :index="index"></shopping-list-title-component>
      </li>
      <li>
        <a href="#" data-toggle="modal" data-target="#addShoppingList">
          <font-awesome-icon icon="plus-circle" />
        </a>
        <add-shopping-list></add-shopping-list>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div  v-for="(list, index) in shoppingList" :id="'tab-'+list.id" :key="index" :class="[index === 0 ? 'show active': '', 'tab-pane fade']" role="tabpanel">
        <shopping-list-component :items="list.items" :title="list.title" :id="list.id"></shopping-list-component>
      </div>
    </div>
  </div>
</template>
<script>

import store from './vuex/store'
import ShoppingListComponent from './components/ShoppingListComponent'
import ShoppingListTitleComponent from './components/ShoppingListTitleComponent'
import AddShoppingList from './components/addShoppingList'
import { mapGetters, mapActions } from 'vuex'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  store,
  name: 'app',
  components: {
    'shopping-list-component': ShoppingListComponent,
    'shopping-list-title-component': ShoppingListTitleComponent,
    'add-shopping-list': AddShoppingList,
    'font-awesome-icon': FontAwesomeIcon
  },

  data () {
    return {
      title: 'Shopping App'
    }
  },
  mounted () {
    this.populateShoppingList()
  },
  computed: {
    ...mapGetters({
      shoppingList: 'getLists'
    })
  },
  methods: {
    ...mapActions([
      'populateShoppingList',
      'createShoppingList'
    ]),
    href: (id) => { return '#tab-' + id }
  }

}
</script>
