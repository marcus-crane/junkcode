import json

file = open('hiragana.json', 'r')
hiragana = json.loads(file.read())
agroup = hiragana['a']

print('Identify the following:')
results = { 'y': 0, 'n': 0 }

for key in agroup:
  print(agroup[key])

  answer = input('> ')

  if answer == key:
    results['y'] += 1
    print('Correct!')
  else:
    results['n'] += 1
    print('Sorry, that was actually the letter {}'.format(key))

print('You got {}/{} correct!'.format(results['y'], len(agroup)))
