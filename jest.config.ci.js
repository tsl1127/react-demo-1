const base = require('./jest.config')
module.exports = Object.assign({},base,{
    reporters: ["jest-junit"], //分析报表
    collectCoverage:true,//是否搜集测试覆盖率
    collectCoverageFrom: [
        "lib/**/*.{ts,tsx}",
        "!**/node_modules/**"  //这是不测的目录
    ],
    coverageDirectory:'coverage',
    coverageReporters:['text','lcov'],
})