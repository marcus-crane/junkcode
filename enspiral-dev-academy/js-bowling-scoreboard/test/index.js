var test = require('tape')
var bowling = require('../bowling')

test('Gutterball : ', function(t) {
  var frame = [0, 0]
  var score = bowling.scoreFrame(frame)
  t.equal(score, 0)
  t.end()
})

test ('Normal frame : ', function(t) {
  var frame = [2, 3]
  var score = bowling.scoreFrame(frame)
  t.equals(score, 5)
  t.end()
})

test ('Spare frame : ', function(t) {
  var frame = [9, 1]
  var score = bowling.scoreFrame(frame)
  t.equals(score, 10)
  t.end()
})

test ('Strike frame : ', function(t) {
  var frame = [0, 10]
  var score = bowling.scoreFrame(frame)
  t.equals(score, 10)
  t.end()
})

test ('Double Strike frame : ', function(t) {
  var frame = [10, 0]
  var score = bowling.scoreFrame(frame)
  t.equals(score, 20)
  t.end()
})


