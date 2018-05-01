# Client-side

In this exercise you'll look at:

 - Client-side requests
 - Client-side rendering

You'll be using some familiar tools like github-pages, along with some shmancy tooling to help us bundle and push to GitHub. For rendering, we'll be using Handlebars (again!), but we'll be using Browserify so the browser can use it easily.

The tools in this setup include: 

- [Browserify](https://www.npmjs.com/package/browserify) - to build our assets so they are ready for the browser
- [Handlebars](http://handlebarsjs.com/) - so we can do template rendering
- [hbsfy](https://www.npmjs.com/package/hbsfy) - a browserify transform for Handlebars
- [xhr](https://www.npmjs.com/package/xhr) - a request-module that works in the browser
- [gh-pages](https://www.npmjs.com/package/gh-pages) - so we can deploy to gh-pages

---

## Release 0

- **Fork** this repo to your personal account. **So we can use a gh-pages site**. The cohort-specific organisation won't work.
- Read the scripts in `package.json`. Be sure you understand what each line does.
- Ensure your Git remotes are correct. You should be able to use the npm scripts to setup a GitHub page for you.

**NOTE** - gh-pages will act on the remote you have set up at `origin` ... so be sure your setup is correct.

These commands might be useful in terminal: 

```sh
git remote -v
git remote --help
git remote add --help
git remote remove --help
```


## Release 1

Find an API you've created or that is easy to use. Don't use one that needs authentication or keys for this one (no twitter). You might like to check out the [International Space Station API](http://wheretheiss.at/w/developer).

![NZ from the ISS](nz_from_iss.png)

Replace the GET requests of the existing API to get something back from the API of your choice and `console.log` it.


## Release 2

- Spin up an API you've written.
- Hit the that API and render the results using a new client-side template. You will probably need to write a new one. 
- GOTCHA ALERT! Think about how this will work on GitHub Pages. Only use a previous API to test this locally. Switch out for one on the web when you push this up, discuss in your pair why this is important.


## Release 3

- Add an event listener to a button on a page, which kicks off a request, then renders the results using a template.


## Release 4

This setup uses Handlebars and is just one option.  Look for another template engine and other potential setups. 

Seek out and inquire about different tools: 

- Client-side templating: Jade and Hyperscript options.
- AJAX/client-side requesting: jQuery AJAX is another option and there are many more
- Bundling tools: webpack, gulp and grunt are other options

Once you've had a look at that stuff, have a look at some productivity boosts: 

- Could you use something to watch your files and re-bundle automatically? Maybe checkout budo or watchify.

