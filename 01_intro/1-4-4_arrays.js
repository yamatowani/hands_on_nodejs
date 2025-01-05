const arr1 = ['foo', 'bar']
arr1.length
arr1[0]
arr1.indexOf('bar')
arr1.indexOf('baz') //-1
arr1.includes ('bar')
arr1.includes('baz') //false
arr1.join('-') //foo-bar
arr1.join() //foo,bar
arr1.push('baz')
arr1.push('a', 'b', 'c')
arr1.pop()
arr1.unshift('qux')
arr1.unshift('d', 'e', 'f')
arr1.shift()

const arr2 = ['foo', 'bar', 'baz']

const arr3 = ['a', ...arr2, 'b', 'c']

const [head1, head2, ...arr4] = arr2


arr2.slice(0,2)
arr2.slice(2)
arr2.slice()

arr2.sort() //UTF-16コードの昇順にソート, 元の配列も破壊的変更
arr3.sort((a,b) => a.length - b.length) //文字数でソート

for (let i =0; i < arr2.length; i++) {
  console.log(arr2[i])
}

for (const e of arr2) {
  console.log(e)
}

arr2.forEach(console.log) // 各要素にコールバック関数の処理を適用, 戻り値ない
// 要素, index, 配列の順で表示
// bar 0 [ 'bar', 'baz', 'foo' ]
// baz 1 [ 'bar', 'baz', 'foo' ]
// foo 2 [ 'bar', 'baz', 'foo' ]

arr2.map(e => e + e) // 各要素をコールバック関数の戻り値に置き換えた配列を返す

arr2.filter(e => e.startsWith('b')) //コールバック関数がtrueを返す要素のみを含む配列を返す

arr2.find(e => e.startsWith('b')) //コールバック関数がtrueを返す最初の要素を返す

