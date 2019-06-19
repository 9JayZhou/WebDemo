// taobao方案自适应
(function () {
    // 后去设备像素比
    var dpr = window.devicePixelRatio;
    // 创建像素
    var meta = document.createElement('meta');
    //  scale  物理像素/设备像素
    //scale像素比越小,显示的内容越小,看到的内容越多
    var scale = 1 / dpr;
    // 设置 name="viewport"
    meta.setAttribute('name', 'viewport');
    // 拼接字符
    meta.setAttribute('content', 'width=device-width, user-scalable=no, initial-scale=' + scale +
        ', maximum-scale=' + scale + ', minimum-scale=' + scale);
    // 添加到页面
    document.getElementsByTagName('head')[0].appendChild(meta);
    // 动态设置的缩放大小会影响布局视口的尺寸
    function resize() {
        console.log('object :', dpr);
        // 判断手机类型
        var n = navigator.userAgent;
        console.log('n :', n);
        // 获取窗口宽度  ,不包括滚动条
        var deviceWidth = document.documentElement.clientWidth;
        //设置字体大小 640窗口字体大小为16px
        document.documentElement.style.fontSize = deviceWidth /40 + 'px';
    }
    resize();
    window.onresize = resize;
})()

// wangyi方案自适应
// (function () {
//     var dpr = window.devicePixelRatio;
//     function resize() {
//         var deviceWidth = document.documentElement.clientWidth;
//         console.log('object :', deviceWidth);
//         console.log('dpr :', dpr);
//         document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
//     }
//     resize();
//     window.onresize = resize;
// })()
