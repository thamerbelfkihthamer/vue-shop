import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import Question from '../../../../src/components/Question'

describe('Question', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(Question, {
            propsData: {
                dataQuestion: {
                    title: 'the title',
                    body: 'the body',
                }
            }
        })
    });

    it('presents the title and the body', () => {
        see('the title');
        see('the body')
    });

    it('can be edited', () => {
        expect(wrapper.contains('input[name=title]')).to.be.false;

        click('#edit');

        expect(wrapper.find('input[name=title]').element.value).to.equal('the title');
        expect(wrapper.find('textarea[name=body]').element.value).to.equal('the body');
    });

    it('hide edit button during edit mode', () => {
        click('#edit');
        expect(wrapper.contains('#edit')).to.be.false;

    });

    it('update the question after being edited', () => {

        click('#edit');

        type('input[name=title]', 'changed title');
        type('textarea[name=body]', 'changed body');

        click('#update');
        see('changed title');
        see('changed body');

    });

    it('can cancel out edit mode', () => {
        click('#edit');

        type('input[name=title]', 'changed title');

        click('#cancel');

        see('the title');
    });

    let see = (text, selector) => {
        let wrap = selector ? wrapper.find(selector): wrapper;
        expect(wrap.html()).contains(text)
    };

    let type = (selector, text) => {

        let node = wrapper.find(selector);
        node.element.value = text;
        node.trigger('input')
    };

    let click = selector => {
        wrapper.find(selector).trigger('click');
    }
});
