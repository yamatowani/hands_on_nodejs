0 === '' // false
0 == '' // true

1 === 1 // true

{ foo: 1 } === { foo: 1 } //構造が同じだけで別のオブジェクトなのでfalse

const obj5 = { foo: 1 }

const obj6 = obj5

obj5 === obj6 // true
