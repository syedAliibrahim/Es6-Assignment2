let mainObj={
    id:0,
    obj1:{ id:1,
        obj2:{ id:2,
            obj3:{ id:3,
                obj4:{
                    id:4,
                }
            }
        }    
    }
}
let layer4={...mainObj.obj1.obj2.obj3.obj4}
console.log(layer4)