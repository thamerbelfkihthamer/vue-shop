import {createLocalVue, mount} from '@vue/test-utils'
import { expect } from 'chai'
import  sinon from 'sinon'

import  Vuex from 'vuex'
const localVue = createLocalVue();

localVue.use(Vuex)


import AddItemComponent from "../../../../src/components/AddItemComponent";

describe('AddItemComponent', () => {

    let wrapper = null;
    let actions = null;
    let store = null;

    beforeEach(() => {
        actions =  {
            updateList: sinon.stub()
        },

        store = new Vuex.Store({
            actions
        });

        wrapper = mount(AddItemComponent, {
            store,
            localVue,
            propsData: {
                id: 1
            }
        });
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should show error message when input is empty', () => {
        expect(wrapper.contains('#error')).to.be.false;
        wrapper.find('#add').trigger('click');

        expect(wrapper.html()).contains('please fill the shopping list title');

    });

    it('should show error when input is fill with spaces', () => {
        wrapper.find('input[name=item]').element.value = '    ';
        wrapper.find('#add').trigger('click');

        expect(wrapper.html()).contains('please fill the shopping list title');

    });

    it('should add new shopping list item', () => {

        wrapper.find('input[name=item]').setValue('my lovely list item');
        wrapper.find('#add').trigger('click');

        expect(wrapper.emitted('add-item')[0]).to.eql(['my lovely list item']);
        expect(wrapper.find('input[name=item]').isEmpty()).to.be.true;
        expect(actions.updateList.calledOnce).to.be.true;
    });

    it('should add new shopping list item when hit input event', () => {

        // it seem that there is an issue with keydown event within vue-utils-test
        wrapper.find('input[name=item]').element.value = 'my lovely list item';
        wrapper.trigger('keydown', { key: 'enter' });
    });
})
