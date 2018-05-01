var h = require('hyperscript')

function greetingTemplate (person) {
  var name = person.name
  var bgRed = {'background-color': '#f22'}
  var bgGreen = {'background-color': '#2f2'}
  var bgBlue = {'background-color': '#22f'}

  var domElement =
  h('div#page',
    h('div#header',
      h('h1.classy', 'Welcome ' + name + '!', {style: bgBlue})
    ),
    h('div#menu', { style: bgGreen },
      h('ul',
        h('li', 'one'),
        h('li', 'two'),
        h('li', 'three')
      )
    ),
    h('h2', 'content title', { style: bgRed }),
    h('p',
      "so it's just like a templating engine,\n",
      'but easy to use inline with javascript\n'
    ),
    h('p',
      'the intension is for this to be used to create\n',
      'reusable, interactive html widgets. '
    )
  )

  return domElement
}

module.exports = greetingTemplate
