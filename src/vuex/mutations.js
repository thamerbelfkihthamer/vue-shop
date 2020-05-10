import * as types from './mutation_types'
import getters from './getters'
import _ from 'underscore'

export default {
  [types.CHANGE_TITLE] (state, data) {
    getters.getListById(state, data.id).title = data.title
  },
  [types.POPULATE_SHOPPING_LIST] (state, list) {
    if(_.isArray(list)){
      state.shoppingList = list
    }
  },
  [types.ADD_SHOPPING_LIST] (state, newList) {
    if (_.isObject(newList) && _.has(newList, 'title')) {
      state.shoppingList.push(newList)
    }
  },
  [types.DELETE_SHOPPING_LIST] (state, id) {
    state.shoppingList = _.reject(state.shoppingList, (list) => {
      return list.id === id
    })
  }
}
