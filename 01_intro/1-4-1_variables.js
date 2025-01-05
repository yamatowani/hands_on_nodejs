const foo = 'foo'
let bar = 'bar'

foo = 'foo2' //TypeError: Assignment to constant variable.
bar = 'bar2' // ok
const foo = 'foo3' //同スコープ内では同じ変数名で定義できな
let bar = 'bar3'
{ const foo = 'foo4'}
{ let bar = 'bar4'}


