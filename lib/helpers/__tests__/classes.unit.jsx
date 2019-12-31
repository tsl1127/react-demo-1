import classes, { scopedClassMaker } from '../classes'

describe('classes测试', () => {
   it('接受一个className', () => {
      const result = classes('a')
      expect(result).toEqual('a')
   })
   it('接受二个className', () => {
      const result = classes('a', 'b')
      expect(result).toEqual('a b')
   })
   it('接受带有undefined', () => {
      const result = classes('a', undefined)
      expect(result).toEqual('a')
   })
   it('接受多个值', () => {
      const result = classes(
         'a',
         undefined,
         '中文',
         false,
         null
      )
      expect(result).toEqual('a 中文')
   })
   it('什么都不传', () => {
      const result = classes()
      expect(result).toEqual('')
   })
})


describe('scopedClassMaker', () => {
   it('接受字符串或对象', () => {
      const scopedClass = scopedClassMaker('lunzi-layout')
      expect(scopedClass('')).toEqual('lunzi-layout')
      expect(scopedClass('x')).toEqual('lunzi-layout-x')
      expect(scopedClass({ y: true, z: false })).toEqual('lunzi-layout-y')
      expect(scopedClass({ y: true, z: true })).toEqual('lunzi-layout-y lunzi-layout-z')
      expect(scopedClass({ y: true, z: true }, { extra: 'hi' })).toEqual('lunzi-layout-y lunzi-layout-z hi')

   })
})