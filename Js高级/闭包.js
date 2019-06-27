/**
 * 基本闭包
 * 产生几次闭包==>调用了几次内部函数
 */
function fn1() {
    let index = 0;
    function fn2() {
        index++
        console.log(index);
    }
    return fn2
}
let f = new fn1();
f();
f();
/**
 * 将函数实参传递给内部函数
 * msg是引用的变量
 */
function SetFn(msg, time) {
    setTimeout(function () {
        console.log(msg);
    },time)
}
SetFn("Hello", 1000)

// 闭包延长函数变量生命周期,可以在函数外部操作内部函数
// 闭包在创建函数变量产生,将 变量置为null回收
// 闭包内存占用高,容易内存泄漏

// Js闭包模块
/**
 * 模块定义规则
 *     实现特定的功能
 *     将数据封装到一个函数内部(私有)
 *     暴露一个或多个方法或函数(供调用)
 */
function myMoudle() {
    // 私有数据
    let str = "Hello Javascript"
    // 函数在方法内部
    function toUpper() {
        console.log('大写toUpper :', str.toUpperCase());
    }
    function toLower() {
        console.log('小写toCase :', str.toLowerCase());
    }
    //  暴露一个或多个方法或函数(供调用)
    return {
        toUpper: toUpper,
        toLower: toLower
    }
}