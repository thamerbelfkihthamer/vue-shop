import {createLocalVue, mount} from '@vue/test-utils'
import { expect } from 'chai'
import  sinon from 'sinon'

const JQuery = {
    install (Vue) {
        Vue.prototype.$JQuery = require('jquery')
    }
}
import  Vuex from 'vuex'
import 'bootstrap'

const localVue = createLocalVue();
localVue.use(JQuery)
localVue.use(Vuex)

import AddShoppingList from '../../../../src/components/addShoppingList'

describe('AddShoppingList', () => {

    let wrapper = null;
    let actions = null;
    let store = null;

    beforeEach(() => {
        actions = {
            createShoppingList: sinon.spy()
        }

        store = new Vuex.Store({
            actions
        })

        wrapper = mount(AddShoppingList, {
            store,
            localVue,

        })
    })

    afterEach(() => {
        sinon.restore()
    });

    it('mounted as expected', () => {
        expect(wrapper.find('#exampleModalLabel').exists()).to.be.true;
    });

    it('show error message when hit button with empty title & did not dispatch action', () =>  {
        wrapper.find('#title').element.value = '';
        wrapper.find('#addShopping').trigger('click');
        expect(wrapper.find('#error').exists()).to.be.true;
        expect(actions.createShoppingList.calledOnce).to.be.false;
    });

    it('remove error message when fill title  after hiting button with empty title', () => {
        wrapper.find('#title').element.value = '';
        wrapper.find('#addShopping').trigger('click');
        expect(wrapper.find('#error').isVisible()).to.be.true;

        wrapper.find('#title').element.value = 'this is my new title';
        wrapper.find('#title').trigger('input');
        wrapper.find('#addShopping').trigger('click');
        expect(wrapper.find('#error').isVisible()).to.be.false;
    });

    it('should disable error message when we fill the title in the second time ', () => {

        wrapper.find('#title').element.value = '';
        wrapper.find('#addShopping').trigger('click');
        expect(wrapper.find('#error').isVisible()).to.be.true;

        wrapper.find('#close').trigger('click');

        expect(wrapper.find('#error').isVisible()).to.be.false;

        // this is positive/false not working because we have already hidden the model ??
        expect(wrapper.find('#title').element.value).to.be.an('string').that.is.empty;
    })

    it('create new shoppingList  & dispatch createShoppingList action', () => {

        wrapper.find('#title').element.value = 'this is my new title';
        wrapper.find('#title').trigger('input');
        wrapper.find('#addShopping').trigger('click');
        expect(wrapper.find('#error').isVisible()).to.be.false;
        expect(actions.createShoppingList.calledOnce).to.be.true;
    })
})
