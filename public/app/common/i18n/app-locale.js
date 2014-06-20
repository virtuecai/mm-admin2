/**
 * Created by caizhengda on 2014/6/14 0014.
 */

var app = angular.module('app');

//TODO: move those messages to a separate module
app.constant('I18N.MESSAGES', {
    'en-us': {
        'errors.route.changeError': 'Route change error',
        'crud.user.save.success': "A user with id '{{id}}' was saved successfully.",
        'crud.user.remove.success': "A user with id '{{id}}' was removed successfully.",
        'crud.user.remove.error': "Something went wrong when removing user with id '{{id}}'.",
        'crud.user.save.error': "Something went wrong when saving a user...",
        'crud.project.save.success': "A project with id '{{id}}' was saved successfully.",
        'crud.project.remove.success': "A project with id '{{id}}' was removed successfully.",
        'crud.project.save.error': "Something went wrong when saving a project...",
        'login.reason.notAuthorized': "You do not have the necessary access permissions.  Do you want to login as someone else?",
        'login.reason.notAuthenticated': "You must be logged in to access this part of the application.",
        'login.error.invalidCredentials': "Login failed.  Please check your credentials and try again.",
        'login.error.serverError': "There was a problem with authenticating: {{exception}}.",
        'login.modal.title': "Sign in",
        'login.modal.form': "Please enter your login details"
    },
    'zh-ch': {
        'errors.route.changeError': '路由变更错误',
        'crud.user.save.success': "用户(id:'{{id}}') 保存成功.",
        'crud.user.remove.success': "用户(id:'{{id}}') 移除成功.",
        'crud.user.remove.error': "删除用户(id:'{{id}}') 发生了错误.",
        'crud.user.save.error': "保存用户时发生了错误",
        'crud.project.save.success': "项目(id:'{{id}}') 保存成功.",
        'crud.project.remove.success': "项目(id:'{{id}}') 移除成功.",
        'crud.project.save.error': "保存项目时候发生了错误",
        'login.reason.notAuthorized': "您没有该访问权限, 你想登录其他帐户 ？",
        'login.reason.notAuthenticated': "您必须先登录才能访问此部分的应用程序.",
        'login.error.invalidCredentials': "登录失败。请检查您的凭据，然后再试一次.",
        'login.error.serverError': "身份验证异常: {{exception}}.",
        'login.modal.title': "登录",
        'login.modal.form': "请输入您的登录信息"
    }
});
