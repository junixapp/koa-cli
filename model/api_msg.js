'use strict'

class ApiMsg {
    constructor(code, msg) {
        this.code = code
        this.msg = msg
    }
}

module.exports = {
    ApiMsg,

    //成功
    Success: new ApiMsg(0, "操作成功"),

    //错误定义
    //通用错误定义
    PermissionDenyError: new ApiMsg(-1, "权限不足"),
    AddError: new ApiMsg(-2, "添加失败"),
    DeleteError: new ApiMsg(-3, "删除失败"),
    UpdateError: new ApiMsg(-4, "更新失败"),
    QueryError: new ApiMsg(-5, "查询失败"),
    DBError: new ApiMsg(-6, "数据库操作失败"),
    UnknownError: new ApiMsg(-7, "未知错误"),
    PageMissError: new ApiMsg(-8, "缺少page"),
    PageWrongError: new ApiMsg(-9, "page不正确"),
    IdMissError: new ApiMsg(-10, "缺少id"),
    NameExistError: new ApiMsg(-11, "名字已存在"),

    //特殊错误定义
    //Token相关
    TokenInvalidError: new ApiMsg(-20, "token失效"),
    TokenMissError: new ApiMsg(-21, "缺少token"),
    TokenWrongError: new ApiMsg(-22, "token错误"),

    //############################# 业务相关错误码 #################################
}
