module.exports = {
  scoreFrame: scoreFrame,
  history: history
}

var scoreBoard = []

function scoreFrame(score) {
  var total = 0
  for (i in score) {
    total += score[i]
    if (score[i] === 10 && score[i - 1] === 0 || score[i] === 0 && score[i - 1] === 10) {
      score = [10]
    }
  }
  scoreBoard.push(score)

  if (total < 10) {
    return total
  }
  else if (total >= 10 && score.length === 2) {
    return spare(score)
  }
  else if (total >= 10 && score.length === 1) {
    return strike(score)
  }
}

function spare(score) {
  return (score = 10)
}

function strike(score) {
  if (scoreBoard[scoreBoard.length - 2] == 10) {
    return doubleStrike(score)
  } else {
    console.log('scoreBoard: ', scoreBoard[scoreBoard.length - 2])
    console.log("Score template", score[0])
    return (score[0])
  }
}

function doubleStrike(score) {
  console.log("Double Strike")
  score = score.concat(scoreBoard[scoreBoard.length - 2])
  for (i in score) {

  }
  console.log(score)
  return score + scoreBoard[scoreBoard.length - 2]
}

function history() {
  return scoreBoard
}
