import mutations from '../../../../src/vuex/mutations'
import {ADD_SHOPPING_LIST, DELETE_SHOPPING_LIST, POPULATE_SHOPPING_LIST, CHANGE_TITLE} from '../../../../src/vuex/mutation_types'
import { expect } from 'chai'

describe('mutations.js', () => {
  let state = { }

  beforeEach(() => {

    state = {
      shoppingList: []
    }
  })

  describe('ADD_SHOPPING_LIST', () => {
    it('should add item to the shoppingList array and increase its length', () => {
          // arrange
        let list = {id: '1', title: 'shopping list title'}
        // act
        mutations[ADD_SHOPPING_LIST](state, list)
        // assert
        expect(state.shoppingList).to.eql([list])
        expect(state.shoppingList).to.have.length(1)
    })

    it('should not add the item to the shopping list if item does not have title property', () => {

        let list = { id : 1}
        mutations[ADD_SHOPPING_LIST](state, list)
        expect(state.shoppingList).to.eql([])
        expect(state.shoppingList).to.have.length(0)
    })

    it('should not add string to the shopping list item', () => {
        let list = 'test'
        mutations[ADD_SHOPPING_LIST](state, list)
        expect(state.shoppingList).to.eql([])
        expect(state.shoppingList).to.have.length(0)
    })
  })


  describe('DELETE_SHOPPING_LIST', () => {

        let list = { }

        beforeEach(() => {
            list = [
                {
                    id: 1,
                    title: 'list 1',
                    list: []
                },
                {
                    id: 2,
                    title: 'list 2',
                    list: []
                }
            ]
            state.shoppingList = list
        })

        it('should not delete list with fake id', () => {
            let id = 3
            mutations[DELETE_SHOPPING_LIST](state, id)
            expect(state.shoppingList).to.have.length(2)
            expect(state.shoppingList).to.eql(list)
        })

        it('should delete list with existing id',  () => {
            let id = 1

            mutations[DELETE_SHOPPING_LIST](state, id)
            expect(state.shoppingList).to.have.length(1)
            expect(state.shoppingList).to.eql([
                {
                    id: 2,
                    title: 'list 2',
                    list: []
                }
            ])
        })
    });


    describe('POPULATE_SHOPPING_LIST', () => {

      it('should shopping list contain the new passed list', () => {
          let list = [
              {
                  id: 1,
                  title: 'list 1',
                  list: []
              },
              {
                  id: 2,
                  title: 'list 2',
                  list: []
              }
          ]

          mutations[POPULATE_SHOPPING_LIST](state, list)
          expect(state.shoppingList).to.have.length(2)
          expect(state.shoppingList).to.eql(list)
      })


      it('should shopping list be empty if no list is passed', () => {
          mutations[POPULATE_SHOPPING_LIST](state)
          expect(state.shoppingList).to.have.length(0)
      })

      it('should list be an array to be added to shoppingList', () => {
          let list = 'test'
          mutations[POPULATE_SHOPPING_LIST](state, list)
          expect(state.shoppingList).to.have.length(0)
      })

  })

    describe('CHANGE_TITLE', () => {

        let list = { }

        beforeEach(() => {
            list = [
                {
                    id: 1,
                    title: 'list 1',
                    list: []
                },
                {
                    id: 2,
                    title: 'list 2',
                    list: []
                }
            ]
            state.shoppingList = list
        })


        it('should not change title if id does not exist within the list', () =>  {

            let data = {
                title: 'this is the new list title',
                id: 1
            }

            state.shoppingList = list

            mutations[CHANGE_TITLE](state, data)

            expect(state.shoppingList).to.eql(list)
        })

        it('should change title within the list by id', () => {
            let data = {
                title: 'this is the new list title',
                id: 1
            }

            state.shoppingList = list

            mutations[CHANGE_TITLE](state, data)
            expect(state.shoppingList).to.eql(
                [
                    {
                        id: 1,
                        title: 'this is the new list title',
                        list: []
                    },
                    {
                        id: 2,
                        title: 'list 2',
                        list: []
                    }
                ]
            )
        })
    });

})

