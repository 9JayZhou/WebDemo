let Person = {
    // person=new Object();
    name: '1',
    age: '123',
    sex: '男',
    getname: function () {
        console.log('this.name :', this.name);
    }
}
// 对象添加属性
Person.english = "6级"

// 构造器
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.getname = function () {
    }
}
// 原型可直接想构造器添加属性
Person.prototype.nationality="English"
// 遍历对象
for (const p in Person) {
    if (Person.hasOwnProperty(p)) {
       console.log(Person[p]+' ');
        
    }
}