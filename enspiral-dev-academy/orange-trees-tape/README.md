# Orange Trees

## Summary

Here are some features:
* A tree can age.
* For each year the tree ages up to it's fruit bearing age, it gets taller.
* After a tree reaches fruit bearing age, it can grow fruit.
* A tree grows a random number of oranges each year it ages (after reaching fruit bearing age)
* An orange has a random diameter.
* You can pick all the fruit that grows each year.
* Any un-picked fruit dies when the tree ages again.
* A tree dies after it ages for it's max age years and can no longer bear fruit.

## Releases

### Release 0 : Pass the tape tests.

We've written a lot of tests for you in tape, your job is to write the code to
make these tests pass.  

In this release we will create an orange tree, age the tree, grow oranges
on the tree, and pick fruit off the tree.  We will model all of this using
JavaScript **constructors** and **prototypes**.

### Relase 1 : Improve the tests.

Look at the feature list above. Are all those features tested? Work out what is missing. There are at least two features that don't have tests.

### Release 2 : The View

Now let's add some interaction with the DOM. Write your DOM interaction code in
`index.js`. Use the objects you built in release 1.

* Write code that allows you to `plant` a tree by clicking a button. It should
  be visible on the screen somehow. (There is a tree image in the images file you may use)
* Write code that allows you to `age` a tree by clicking a button.  If you age the tree enough there should be oranges that appear on the tree (use the orange image)
* Write code that allows you to `pick` a orange off a tree by clicking a
  button.


### Release 3 : Play!

* Have some fun.  Can you add a pear tree? Can you do it TDD?
* Can you pick all the fruit that grows each year and put it in a basket?
* Can you know the number of fruit in the basket and the average diameter of that fruit at any time?

* Can you figure out how to change things so that clicking on an orange removes that orange from the tree (Harder, look up jquery event delegation)

### Release 4 : Rewrite using classes

* Go read up on ES6 classes
* Replace your test setup with an ES6 friendly one
  - use `babel-tape-runner` with `babel-preset-es2015`
  - replace your `module.exports` and require with the new [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) and [import](https://developer.mozilla.org/en/docs/web/javascript/reference/statements/import)
* Replace the prototype-style objects with class-style objects


## Resources

1. [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
1. [Basic JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
1. [OO JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
