// import renderer from 'react-test-renderer'  这种写法在jest里会报错，没有默认导出；是由于tsconfig.json里的allowSyntheticDefaultImports为true导致的,让其为false，让esModuleInterop为true，这里这种写法就可以用

// import * as renderer from 'react-test-renderer'
// import * as React from 'react'
import renderer from 'react-test-renderer'
import React from 'react'
import Button from '../button'

describe('button测试',()=>{
    it('是个div',()=>{
        const json = renderer.create(<Button/>).toJSON()  //变为json
        expect(json).toMatchSnapshot()
    })
})