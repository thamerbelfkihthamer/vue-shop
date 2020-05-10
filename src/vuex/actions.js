import { CHANGE_TITLE, POPULATE_SHOPPING_LIST, ADD_SHOPPING_LIST, DELETE_SHOPPING_LIST } from './mutation_types'
import api from './../../api/index'
import getters from './getters'

export default{
  changeTitle: (store, data) => {
    store.commit(CHANGE_TITLE, data)
    store.dispatch('updateList', data.id)
  },
  populateShoppingList: ({ commit }) => {
    return api.fetchShoppingLists().then(response => {
      commit(POPULATE_SHOPPING_LIST, response.data)
    })
  },
  updateList: (store, id) => {
    let shoppingList = getters.getListById(store.state, id)
    api.update(shoppingList)
  },
  createShoppingList: (store, shoppingList) => {
    api.add(shoppingList).then(() => {
      store.dispatch('populateShoppingList')
    }, () => {
      store.commit(ADD_SHOPPING_LIST)
    })
  },
  deleteShoppingList: (store, id) => {
    api.delete(id).then(() => {
      store.dispatch('populateShoppingList')
    }, () => {
      store.commit(DELETE_SHOPPING_LIST)
    })
  }
}
