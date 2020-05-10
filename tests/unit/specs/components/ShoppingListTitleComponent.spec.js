import { shallowMount, createLocalVue } from '@vue/test-utils';
import { expect } from 'chai';
import  sinon from 'sinon';
import ShoppingListTitleComponent from "../../../../src/components/ShoppingListTitleComponent";

import Vuex from 'vuex';
let localVue = createLocalVue();
localVue.use(Vuex);


describe('ShoppingListTitleComponent', () => {

    let wrapper = null;
    let actions = null;
    let store = null;

    beforeEach(() => {
        actions = {
            deleteShoppingList: sinon.stub()
        };

        store = new Vuex.Store({
            actions
        });

        wrapper = shallowMount(ShoppingListTitleComponent, {
            store,
            localVue,
            propsData: {
                id: 1,
                title: 'mocked title',
                index: 2
            }
        });

    });

    afterEach(() => {
        sinon.restore();
    })

    it('should dispatch deleteShoppingList', () => {
        wrapper.find('#delete').trigger('click');
        expect(actions.deleteShoppingList.calledOnce).to.be.true;
    });

    it('href should return correct value', () => {
        expect(wrapper.vm.href).to.eql('#tab-1');

    })
})
