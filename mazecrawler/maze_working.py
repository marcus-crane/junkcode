# I'm in a Javascript -> Python transition phase for personal projects 
# so hopefully I don't accidentally mix syntaxes anywhere

import math

remainingMoves = 30
alive = True
playerPos = { 'xcoord': 1, 'ycoord': 1 }

def isExitOpen(destination, location):
  roomValue = calcCoordinates(destination) * calcCoordinates(location)
  roomTangent = math.tan(roomValue)
  
  if roomTangent < 0.3:
    return True
  else:
    return False
    
def calcCoordinates(coords):
  return (coords['ycoord'] * 10) + coords['xcoord']
  
def startGame():
  print("You find yourself in a spooky maze. You get the feeling that you're only 30 moves away from dehydration funnily enough.")
  print("You may enter a compass direction eg; N E S W to attempt movement.")
  print("However, note that not all exits may be open and you'll be told which directions you can move.")
  
  promptPlayer()
    
def promptPlayer():
  global playerPos

  print("You are currently located at x {0}, y {1}".format(playerPos['xcoord'], playerPos['ycoord']))
  openRooms = findPossibleDestinations()
  
  print("You can currently move in the following directions: {0}".format(openRooms))
  # I'm gonna assume they enter a single string and try nothing too funny but...
  playerInput = input('> ')
  
  # Pseudocode since I don't know the Python equivalent of uhh, array.includes()(?) in JS
  #if playerMove is not in openRooms:
  #  promptPlayer()
    # I'm not actually sure if using `pass` would cause it to re-run the same as if I just called it again from inside itself? Something new to look up I think!
  #else:
  playerPos = travel(playerInput, playerPos)
  endTurn()
  promptPlayer()
    
def endTurn():
  global playerPos
  global alive
  global remainingMoves

  remainingMoves = remainingMoves - 1
  
  mapLocation = playerPos['xcoord'] + playerPos['ycoord']
  
  if mapLocation == 20:
    print("Congratulations! You made it to the exit and are free to go home!")
    print("Would you like to start again?")
    
    decision = input('> ')
    
    if decision == 'y':
      process.exit() # import os
    else:
      remainingMoves = 30
      alive = True
      playerPos = { 'xcoord': 1, 'ycoord': 1 }
      
      startGame() # Something would clear the screen
  
  if remainingMoves == 0:
    alive = False
    print("See ya on the other side, pal. You're welcome to try again!")
  else:
    print("Nice! You've got {0} left before you're outta that precious H20".format(remainingMoves))
  
def findPossibleDestinations():
  # Should return a list like so ['N', 'E', 'S', 'W']

  possibleDestinations = []
  directions = ['N', 'E', 'S', 'W']
  
  for direction in directions:
    available = checkDirection(direction)
    
    if available:
      possibleDestinations.append(direction)
      
  return possibleDestinations

def checkDirection(direction):
  global playerPos

  exitDestination = travel(direction, playerPos)
  exitOpen = isExitOpen(exitDestination, playerPos)
  
  if exitOpen:
    return True
  else:
    return False
  
def travel(direction, coords):
  if (direction == 'N'):
    coords['ycoord'] = coords['ycoord'] + 1
    return coords
  elif (direction == 'S'):
    coords['ycoord'] = coords['ycoord'] - 1
    return coords
  elif (direction == 'E'):
    coords['xcoord'] = coords['xcoord'] + 1
    return coords
  elif (direction == 'W'):
    coords['xcoord'] = coords['xcoord'] - 1
    return coords
  else:
    return coords

startGame()
