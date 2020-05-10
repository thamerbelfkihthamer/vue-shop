import getters from '../../../../src/vuex/getters'
import { expect } from 'chai'

describe('getters.js', () => {

    let state = {}
    let list = []

    beforeEach(() => {
        state = {
            shoppingList: []
        }

        list =  [
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
    })

    describe('getLists', () => {
        it('should return an empty shoppingList', () => {
            let list = getters.getLists(state)
            expect(list).to.be.empty
        })

        it('should return a full shoppingList Array', () => {
            state.shoppingList = list
            let rslt = getters.getLists(state)
            expect(rslt).to.have.length(2)

        })
    })

    describe('getListById', () => {

        beforeEach(() => {
            state.shoppingList = list
        })

        it('should return object of one list by Id', () => {
            let rslt = getters.getListById(state, 1)
            expect(rslt).to.be.an('object');
            expect(rslt).to.eql({ id: 1, title: 'list 1', list: []})
        })

        it('should return an empty list ', () => {
            let rslt = getters.getListById(state, 'not found')
            expect(rslt).to.be.a('null');
        })

    })
})
