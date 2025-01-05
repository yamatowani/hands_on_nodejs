class Foo {
  #privateField = 1

  publicField = 2
  static #staticPrivateField = 3

  static staticPublicField = 4

  constructor() {
    this.filedInitiallizedInConstructor = parameter
    console.log('Foo constructor')
  }
  
  get #computed() {
    return this.publicField * 2
  }

  get computed() {
    return this.#computed
  }

  set #computed(value) {
    this.publicField = value / 2
  }
  set computed(value) {
    this.#computed = value
  }
  
  #privateMethod() {
    return this.#privateField
  }

  publicMethod() {
    return this.#privateField
  }

  static #staticPrivateMethod() {
    // return this.#privateField
  }
  
  static staticPublicMethod() {
    return this.#staticPrivateField
  }
}


const fooInstance = new Foo(100)

fooInstance.filedInitiallizedInConstructor
fooInstance.computed
fooInstance.computed = 10

class Bar extends Foo {
  constructor(parameter) {
    super(parameter)
    this.subClassPublicField = 100
    console.log('Bar constructor')
  }

  publicMethod() {
    return super.publicMethod() * this.subClassPublicField
  }
}

const barInstance = new Bar(100)

