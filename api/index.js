import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

var ShoppingListsResource = Vue.resource('http://localhost:3000/' + 'shoppinglists{/id}')

export default {
  fetchShoppingLists: () => {
    return ShoppingListsResource.get()
  },
  add: (data) => {
    return ShoppingListsResource.save(data)
  },
  update: (data) => {
    return ShoppingListsResource.update({id: data.id}, data)
  },
  delete: (id) => {
    return ShoppingListsResource.remove({id: id})
  }
}
