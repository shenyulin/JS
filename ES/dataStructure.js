// 20210207 ES6数据结构data structure

// -------------------array-----------//
// let array = [];
// array.push({"arrayKey1":"zhangsan"});       //增加一个元素
// array.forEach(item=>{                       //修改元素值
//     item.arrayKey1? item.arrayKey1=222:"";
// });
// let len=array.length;                       //获取数组长度
// array.splice(0,1);                          //删除元素
// array.length=0;                             //清空数组
// let f=(arr.indexOf(1) > -1);                //判断某一值1是否存在



// -------------------object----------------//
// let obj = {
//     "obj1": "111"
// };
// obj["obj2"]="234";          //增加一个元素
// obj["obj1"]=456;            //修改元素的值  
// delete obj["sex"];          //删除元素



// ----------------map-------------------//
// let map=new Map();
// map.set("map1",1);          //增加一个元素
// map.set("map1",2);          //修改元素的值   
// map.delete("map1");         //删除元素
// let mapLen=map.size;        //求成员总数 


// --------------set--------------//
// let set = new Set([1,2,3,3,4,5,5]);
// let size= set.size;          //求set1的成员总数
// set.add(6);                  //增加一个成员
// set.forEach(item=>{       //修改成员的值
//     item.setKey1? item.setKey1="lisi":"";
// });
// let is=set.has(7);           //在true，不在false
// set.delete(1);               //删除指定1成员
// set.clear() ;                //删除全部成员
// arr2=[...new Set(arr1)];     //数组去重


// ---1 .数组并集---------
let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4, 5, 6];
let union = new Set([...arr1, ...arr2]);
console.log(union)


//-----2.求数组交集-----
let arr11 = new Set([1, 2, 3, 4]);
let arr22 = new Set([2, 3, 4, 5, 6]);
let intersect = new Set([...arr11].filter(x => arr22.has(x)));
console.log(intersect)

//-----2.求数组差集-----
let difference=new Set([...arr11].filter(x => !arr22.has(x)));
console.log(difference)

