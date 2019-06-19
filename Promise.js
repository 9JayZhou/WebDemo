function Promise() {
    // Pending 加载中
    // resolve 成功
    // reject 失败
    return new Promise(function (resolve, reject) {
        if (status==200) {
            resolve()
        }else{
            reject()
        }
    })
}