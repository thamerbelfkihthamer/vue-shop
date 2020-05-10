import { mount } from '@vue/test-utils'
import { expect } from 'chai'

import ItemsComponent from "../../../../src/components/ItemsComponent";


describe('ItemsComponents', () => {
    let wrapper = null;

    beforeEach(() => {

    })

    it('displays 2 items passed as props', () => {
        wrapper = mount(ItemsComponent, {
            propsData:{
                id: 1,
                items:[
                    {
                        "text": "test",
                        "checked": false
                    },
                    {
                        "text": "fdsf",
                        "checked": true
                    }

                ]
            }
        })

       expect(wrapper.findAll('li').length).to.eql(2)
    })

    it('does not display any item as items is empty', () => {

        wrapper = mount(ItemsComponent, {
            propsData:{
                id: 1,
                items:[]
            }
        });

        expect(wrapper.findAll('li').length).to.eql(0);
    })

})
