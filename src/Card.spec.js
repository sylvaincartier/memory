import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Card from './Card'

describe('<Card/>', () => {
    it('should trigger its "onclick" prop when clicked', () => {
        const onClick = sinon.spy()
        const wrapper = shallow(<Card card="1" feedback="hidden" index={ 0 } onClick={onClick}/>)
        wrapper.simulate('click');
        expect(onClick).to.have.been.calledWith(0)
    } )
})