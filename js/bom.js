
var browser=navigator;
var bName=navigator.appName; //浏览器名称
var bVersion=navigator.appVersion; //浏览器版本
var isCookie=navigator.cookieEnabled; //返回指明浏览器中是否启用 cookie 的布尔值。 
var bPlatform=navigator.platform    //返回运行浏览器的操作系统平台。

document.getElementsByTagName('p').html(browser)
