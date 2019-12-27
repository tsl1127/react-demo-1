# react-demo-1

cross-env是跨平台


react相关的测试jest


搜索jest import * as React from 'react'

看测试详细的覆盖率
file:///D:/react-demo-1/coverage/lcov-report/index.html


分为4个：语句覆盖率、分支覆盖率、函数覆盖率、行数覆盖率


持续集成
搜 free ci tools
这里用travis ci
https://travis-ci.org/


还是用cicle ci
选择linux测
语言用node

JEST_JUNIT_OUTPUT没有这个命令了
换成JEST_JUNIT_OUTPUT_DIR

npm 发包需要先登录npm
npm login登录


npm adduser  //用户名

如果出现 Private mode enable, only admin can publish this module
这需要把npm源从taobao源切到npm本身的源端
npm config get registry
npm config set registry http://registry.npmjs.org/ 

 you must verify your email before publishing a new package: https://www.npmjs.com/email-edit
这种是你的npm账户需要email验证




