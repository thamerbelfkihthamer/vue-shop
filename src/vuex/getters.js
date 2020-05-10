import _ from 'underscore'
export default {
  getLists: state => state.shoppingList,
  getListById: (state, id) => {
    let list = _.findWhere(state.shoppingList, { id: id})

    if(list === undefined) return null

    return list
  }
}
