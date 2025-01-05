const obj1 = { propA: 1, propB: 2 }

obj1.propA

obj1['propA']

obj1.propC = 3

delete obj1.propC

const obj2 = { ...obj1, propC: 3} ///スプレッド構文でexucute

const { propA, ...obj3 } = obj2

const obj4 = { propB: 'b', propD: 'd' }

Object.keys(obj2) // ['propA','propB', 'propC']

Object.values(obj2) //  [ 1, 2, 3]

Object.entries(obj2) //[ [ 'propA', 1], [ 'propB', 2], [ 'propC', 3]]


const price {
  value: 100,
  get withTax() {
    return Math.floor(this.value * 1.1)
  },
  set withTax(withTax) {
    this.value = Math.ceil(withTax / 1.1)
  }
}

price.withTax
price.withTax = 333

price.withTax
price.value
