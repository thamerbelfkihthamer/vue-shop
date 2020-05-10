import {createLocalVue, mount} from '@vue/test-utils'
import { expect } from 'chai'
import  sinon from 'sinon'
import  Vuex from 'vuex'
const localVue = createLocalVue();
localVue.use(Vuex)

import ChangeTitleComponent from "../../../../src/components/ChangeTitleComponent";

describe('changeTitleComponent', () => {
    let wrapper;
    let actions;
    let store;

    beforeEach(() => {

        actions = {
            changeTitle: sinon.stub()
        }

        store = new Vuex.Store({
            actions
        });

        wrapper = mount(ChangeTitleComponent, {
            store,
            localVue,
            propsData: {
                title: 'Shopping List Title',
                id: 1
            }
        })
    });

    afterEach(() => {
        sinon.restore();
    });

    it('input should contains the title props ', () => {
        expect(wrapper.find('#title').element.value === 'Shopping List Title').to.be.true;
    });

    it('should dispatch changeTitle action', () => {

        const input = wrapper.find('#title');
        input.trigger('input');
        expect(actions.changeTitle.calledOnce).to.be.true;
    });

    it('should not dispatch changeTitle when title is empty', () => {
        const input = wrapper.find('#title')
        input.element.value = ' ';
        input.trigger('input');
        expect(actions.changeTitle.notCalled).to.be.true;
    });

    it('should remove error message after dispatch changetitle', () => {
        const input = wrapper.find('#title')
        input.element.value = ' ';
        input.trigger('input');
        expect(wrapper.vm.isEmpty).to.be.true;

        input.element.value = 'this is updated value';
        input.trigger('input');
        expect(wrapper.vm.isEmpty).to.be.false;
    })
})
