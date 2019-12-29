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


npm version patch等有命令可以自动升级版本号，详情见npm官网

删除tag
git tag -d tag号

版本号0.0.0
第一位叫major
第二位叫minor
第三位叫patch

升级第3位API不变，修复了bug
升级第2位API有变化，变化不大，完全不影响现有代码
升级第1位API变化很大，影响现有代码

运行sh文件命令
sh ./deploy.sh

npm version $1
$1意思就是arguments[0]，参数的第一个

sh ./deploy.sh patch


npm version $1 && git push
相与 版本升级成功了再push提交

在circleci的status badges里有说明如何设置小徽标，都是markdown语法


[![CircleCI](https://circleci.com/gh/tsl1127/react-demo-1.svg?style=svg)](https://circleci.com/gh/tsl1127/react-demo-1)


https://badge.fury.io/for/js/tsl-react-demo-1

[![npm version](https://badge.fury.io/js/tsl-react-demo-1.svg)](https://badge.fury.io/js/tsl-react-demo-1)
