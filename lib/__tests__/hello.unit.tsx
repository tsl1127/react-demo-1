// test('hello',()=>{
//     expect(1).toEqual(2)
// })

function add(a:number,b:number) {
    return a+b
}

// describe('第一个测试用例',()=>{
//     it('1等于1',()=>{
//         expect(1).toEqual(1)
//     })
// })

describe('第二个测试用例',()=>{
    it('1+2等于3',()=>{
        expect(add(1,2)).toEqual(3)
    })
})