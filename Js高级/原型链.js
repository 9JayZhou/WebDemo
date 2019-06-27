/**
 * 函数显示原型对象默认指向空的object对象 _proto_
 * Object隐式原型对象默认指向空的null对象 _proto_
 * 
 * 所有函数都是Function的实例
 */
console.log(Pro._proto_=== Object);
console.log(Object.prototype._proto_===null);
console.log(Function._proto_===Function.prototype);
 /**
  * 
  */
function Pro() {
    console.log('Pro函数 :',"Hello Pro" );
    this.ProClo = function () {
        console.log('ProClo函数 :',"Hello ProClo" );
    }
}
// 原型
Pro.prototype.ProClo2 = function () {
    console.log('ProClo2原型函数 :',"Hello ProClo2" );
}
// 实例化
let P = new Pro();
P.ProClo2()

/**
 * 读取对象属性值会自动在原型链中查找
 * 设置对象属性值,不会查找原型链,没有会直接添加设置属性值
 * 
 * (重点)属性通过构造函数放在本身上,方法定义在原型中
 */
function ProType(commodity, price,number) {
    this.commodity = commodity;
    this.price = price;
    this.number = number;
}
ProType.prototype.Counter = function (price,number) {
    let totalPrice=price*number
    console.log('totalPrice(总价) :', totalPrice);
}
ProType.prototype.Profit=function(price, purPrice){
    let profit = price - purPrice
    console.log('profit(单件利润) :', profit);
}

let shop = new ProType()
shop.Counter(299, 15)
shop.Profit(56, 12)

/**
 * instanceof
 * A instanceof B  (B的显式原型对象在A的原型链上, return true  else false)
 * A 实例对象 B 函数对象
 */
console.log(shop instanceof ProType);