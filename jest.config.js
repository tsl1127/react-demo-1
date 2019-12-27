module.exports = {
    verbose:true,
    clearMocks: false,
    collectCoverage:true,//是否搜集测试覆盖率
    collectCoverageFrom: [
        "lib/**/*.{ts,tsx}",
        "!**/node_modules/**"  //这是不测的目录
    ],
    coverageDirectory:'coverage',
    coverageReporters:['text','lcov'],
    // reporters: ["default","jest-junit"], //分析报表
    reporters:["default"],
    globals:{
        'ts-jest':{
            tsConfig:'tsconfig.test.json',
        }
    },
    moduleFileExtensions:["js", "jsx", "ts", "tsx"],
    // moduleDirectories:["node_modules",'include'],
    moduleDirectories:["node_modules"],
    moduleNameMapper:{  //通过mock造假数据
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":"<rootDir>/test/__mocks__/file-mock.js",
        "\\.(css|less|sass|scss)$":"<rootDir>/test/__mocks__/object-mock.js"
    },
    testMatch:['<rootDir>/**/__tests__/**/*.unit.(js|jsx|ts|tsx)'],
    transform:{
        "^.+unit\\.(js|jsx)$":"babel-jest",
        "^.+\\.(ts|tsx)$":"ts-jest"
    },
    // setupTestFrameworkScriptFile:"<rootDir>test/setupTests.js"
    setupFilesAfterEnv:["<rootDir>test/setupTests.js"]
}