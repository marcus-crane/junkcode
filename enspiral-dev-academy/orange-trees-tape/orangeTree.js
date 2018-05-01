"use strict"

class OrangeTree {
  constructor(tree) {
    this.age = 0
    this.height = 0
    this.oranges = []
    this.FRUIT_BEARING_AGE = 5
    this.MAX_AGE = 20
    this.isAlive = true
  }

  getAge() {
    return this.age
  }

  getHeight() {
    return this.height
  }

  getOranges() {
    return this.oranges
  }

  grow() {
    this.age += 1
    this.height += 10
    if (this.age >= this.FRUIT_BEARING_AGE) {
      this.oranges = [Math.random()]
    } else {
      this.oranges = []
    }
    if (this.age > this.MAX_AGE) {
      this.isAlive = false
    } else {
      this.isAlive = true
    }
  }

  pickOrange() {
    this.oranges.diameter = Math.random()
    return this.oranges
  }
}

module.exports = OrangeTree
