# vin-gorm-object

# 基于Gin、Gorm、Vue 实现的在线练习系统

GOLANG下载网址： https://golang.google.cn/dl/

参考文档 Module：https://www.kancloud.cn/aceld/golang/1958311

GORM中文官网：https://gorm.io/zh_CN/docs/

GIN中文官网：https://gin-gonic.com/zh-cn/docs/

# 整合 Swagger

参考文档： https://github.com/swaggo/gin-swagger 接口访问地址：http://localhost:8080/swagger/index.html

# 安装 jwt

go get github.com/dgrijalva/jwt-go

## 系统模块
- [x] 用户模块
  - [x] 密码登录
  - [x] 邮箱注册
  - [x] 用户详情
- [x] 题目管理模块
  - [x] 题目列表、题目详情
  - [x] 题目创建、题目修改
- [x] 分类管理模块
  - [x] 分类列表
  - [x] 分类创建、分类修改、分类删除
- [x] 判题模块
  - [x] 提交记录列表
  - [x] 代码的提交及判断
- [x] 排名模块
  - [x] 排名的列表情况
- [ ] 竞赛模块
  - [ ] 竞赛列表
  - [ ] 竞赛管理
  - [ ] 竞赛报名
