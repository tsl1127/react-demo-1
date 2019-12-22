import renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import {mount} from 'enzyme'

describe('icon测试',()=>{
    it('是个svg',()=>{
        const json = renderer.create(<Icon name="wechat"/>).toJSON()  //变为json
        expect(json).toMatchSnapshot()  //match快照,如果需要更新快照则npm test -- -u
    })
    it('测试onclick',()=>{
        let n = 1
        const fn = ()=>{
            n = 2
        }
        const c = mount(<Icon name="wechat" onClick={fn}></Icon>)
        c.find('svg').simulate('click')
        expect(n).toEqual(2)
    })
})