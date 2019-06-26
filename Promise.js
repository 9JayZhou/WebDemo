// function Promise() {
//     // Pending 加载中
//     // resolve 成功
//     // reject 失败
//     return new Promise(function (resolve, reject) {
//         if (status==200) {
//             resolve()
//         }else{
//             reject()
//         }
//     })
// }

// Promise的使用
const fs=require('fs')
function PromiseAjax(fpath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fpath, 'utf-8', (err, data)=>{
            if (err) return reject(err)
            resolve(data)
        })
    })
}
// 调用
PromiseAjax('./wenjain/promiseText.txt').then(function (data) {
    console.log('object :', data);
    return PromiseAjax('./wenjain/promiseText2.txt')
}).then(function (data) {
    console.log('object2 :', data);
}).catch(function (err) {
    // 异常捕获
    console.log('err :', err);
})