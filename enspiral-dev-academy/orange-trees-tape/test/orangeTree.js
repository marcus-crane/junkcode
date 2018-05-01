var test = require('tape');

var OrangeTree = require('../orangeTree');


test('OrangeTree creates a new object', function(t) {
  var tree = new OrangeTree()
  t.true(typeof tree === 'object')
  t.end()
})

test('tree should have age 0 when created', function(t) {
  var tree = new OrangeTree()
  t.equal(tree.getAge(), 0)
  t.end()
})

test('tree should have height 0 when created', function(t) {
  var tree = new OrangeTree()
  t.equal(tree.getHeight(), 0)
  t.end()
})

test('tree should have 0 oranges when created', function(t) {
  var tree = new OrangeTree()
  t.equal(tree.getOranges().length, 0)
  t.end()
})


test('grow increases age', function(t) {
  var tree = new OrangeTree()
  t.equal(tree.getAge(), 0)
  tree.grow()
  t.equal(tree.getAge(), 1)
  t.end()
})

test('grow increases height by 10', function(t) {
  var tree = new OrangeTree()
  t.equal(tree.getHeight(), 0)
  tree.grow()
  t.equal(tree.getHeight(), 10)
  t.end()
})

test('tree has a non zero FRUIT_BEARING_AGE', function(t) {
  var tree = new OrangeTree()
  t.true(tree.FRUIT_BEARING_AGE > 0)
  t.end()
})

test('grow adds a random non-zero number of fruit if age >= FRUIT_BEARING_AGE', function(t) {
  var tree = new OrangeTree()
  while(tree.getAge() < tree.FRUIT_BEARING_AGE){
   t.true(tree.getOranges().length === 0, 'tree has no oranges while age < FRUIT_BEARING_AGE')
   tree.grow()
  }
  t.true(tree.getOranges().length > 0)
  t.end()
})


test('tree has a non zero MAX_AGE', function(t) {
  var tree = new OrangeTree()
  t.true(tree.MAX_AGE > 0)
  t.end()
})

test('tree should die', function(t) {
  var tree = new OrangeTree()
  while (tree.getAge() <= tree.MAX_AGE) {
    t.true(tree.isAlive, 'tree is alive while age < MAX_AGE')
    tree.grow();
  }
  t.false(tree.isAlive, 'Tree dies when age > MAX_AGE')
   
  t.end()
})

test('pick orange', function(t) {
  var tree = new OrangeTree()
  while (tree.getAge() < tree.FRUIT_BEARING_AGE) {
    t.true(tree.getOranges().length ===  0, 'tree has no oranges when too young')
    tree.grow();
  }
  t.true(tree.getOranges().length > 0, 'tree grows some oranges')

  var orange = tree.pickOrange()
  t.true(orange, 'picking an orange returns an object')
  t.true(orange.diameter > 0, 'orange should have a random diameter')
  t.end()
})

