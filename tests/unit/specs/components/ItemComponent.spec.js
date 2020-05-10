import {createLocalVue, mount} from '@vue/test-utils'
import { expect } from 'chai'
import  sinon from 'sinon'
import  Vuex from 'vuex'
const localVue = createLocalVue();
localVue.use(Vuex)

import ItemComponent from "../../../../src/components/ItemComponent";

describe('ItemComponent', () => {
    let wrapper = null;
    let actions = null;
    let store = null;

    beforeEach(() => {

        actions = {
            updateList: sinon.spy()
        }

         store = new Vuex.Store({
             actions
         })

        wrapper = mount(ItemComponent, {
            store,
            localVue,
            propsData: {
                item: {
                    title: 'shopping List Item',
                    checked: false
                },
                id: 1
            }
        })
    })

    afterEach(() => {
        sinon.restore()
    })

    it('shouldn\'t has removed class when checked is false', () => {

        wrapper.setProps({
            item: {
                title: 'title',
                checked: true
            }
        });

        expect(wrapper.find('li').classes('removed')).to.be.true;
    })

    it('should dispatch updateList action', () => {

        wrapper.find('#check').trigger('click');

        expect(actions.updateList.calledOnce).to.be.true;
    });
})
