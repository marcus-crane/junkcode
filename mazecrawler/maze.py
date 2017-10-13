# I'm in a Javascript -> Python transition phase for personal projects 
# so hopefully I don't accidentally mix syntaxes anywhere

remainingMoves = 30
alive = True
playerPos = { 'xcoord': 1, 'ycoord': 1 }

def isExitOpen(destination, location):
  roomValue = calcCoordinates(destination) * calcCoordinates(location)
  roomTangent = Math.tan(roomValue)
  
  if roomTangent < 0.3:
    return True
  else:
    return False
    
def calcCoordinates(coords):
  return (coords['ycoord'] * 10) + coords['xcoord']
  
def startGame():
  writeLine("You find yourself in a spooky maze. You get the feeling that you're only 30 moves away from dehydration funnily enough.")
  writeLine("You may enter a compass direction eg; N E S W to attempt movement.")
  writeLine("However, note that not all exits may be open and you'll be told which directions you can move.")
  
  promptPlayer()
    
def promptPlayer():
  writeLine(f"You are currently located at x { playerPos['xcoord'] }, y { playerPos['ycoord'] }")
  openRooms = findPossibleDestinations()
  
  writeLine(f"You can currently move in the following directions: {openRooms}")
  # I'm gonna assume they enter a single string and try nothing too funny but...
  playerInput = readLine()
  
  # Pseudocode since I don't know the Python equivalent of uhh, array.includes()(?) in JS
  if playerMove is not in openRooms:
    promptPlayer()
    # I'm not actually sure if using `pass` would cause it to re-run the same as if I just called it again from inside itself? Something new to look up I think!
  else:
    playerPos = travel(playerInput, playerPos)
    endTurn()
    promptPlayer()
    
def endTurn():
  remainingMoves = remainingMoves - 1
  
  mapLocation = playerPos['xcoord'] + playerPos['ycoord']
  
  if mapLocation == 60:
    writeLine("Congratulations! You made it to the exit and are free to go home!")
    writeLine("Would you like to start again?")
    
    decision = readLine()
    
    if decision == 'y':
      process.exit() # import os
    else:
      remainingMoves = 30
      alive = True
      playerPos = { 'xcoord': 1, 'ycoord': 1 }
      
      startGame() # Something would clear the screen
  
  if remainingMoves == 0:
    alive = False
    readLine("See ya on the other side, pal. You're welcome to try again!")
  else:
    readLine(f"Nice! You've got {remainingMoves} left before you're outta that precious H20")
  
def findPossibleDestinations():
  # Should return a list like so ['N', 'E', 'S', 'W']

  possibleDestinations = []
  directions = ['N', 'E', 'S', 'W']
  
  for direction in directions:
    available = checkDirection(direction)
    
    if available:
      possibleDirections.append(direction)
      
  return possibleDestinations

def checkDirection(direction):
  exitDestination = travel(direction, playerPos)
  exitOpen = isExitOpen(exitDestination, playerPos)
  
  if exitOpen:
    return True
  else:
    return False
  
def travel(direction, coords):
  if (direction = 'N'):
    coords['ycoord'] = coords['ycoord'] + 1
    return coords
  elif (direction = 'S'):
    coords['ycoord'] = coords['ycoord'] - 1
    return coords
  elif (direction = 'E'):
    coords['xcoord'] = coords['xcoord'] + 1
    return coords
  elif (direction = 'W'):
    coords['xcoord'] = coords['xcoord'] - 1
    return coords
  else:
    return coords

startGame()
