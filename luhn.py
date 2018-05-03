from functools import reduce

def updateNonCheckDigits(index, num):
  if (index % 2 == 0):
    digit = num * 2
    if len(str(digit)) >1:
      return (digit - 9)
    else:
      return digit
  else:
    return num

def calculateChecksum(updatedDigits):
  nonChecksum = reduce(lambda x, y: x+y, updatedDigits)
  checksum = (nonChecksum * 9)
  return checksum

def calculateLuhn(account_number):
  accountDigits = [int(number) for number in str(account_number)]
  checkDigit = accountDigits[-1:][0]
  nonCheckDigits = list(reversed(accountDigits[:-1]))
  updatedDigits = []

  for index, digit in enumerate(nonCheckDigits):
    digit = updateNonCheckDigits(index, digit)
    updatedDigits.append(digit)

  checksum = calculateChecksum(updatedDigits)

  if (checkDigit == (checksum % 10)):
    print(f"{account_number} is a number.")
  else:
    print(f"Sorry, {account_number} isn't a valid number.")

calculateLuhn(input('Number # '))