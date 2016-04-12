### Meteor 1.3.2 + Foundation 6 from Npm

You can clone this repo and run:

```
$ npm install
$ meteor
```

or you can configure Meteor + Foundation 6 from Npm from the start like that:

```
$ meteor create --release 1.3-rc.5 foundation-from-npm
$ cd foundation-from-npm
$ npm install
$ npm install --save foundation-sites
$ npm install --save-dev autoprefixer
$ meteor add fourseven:scss
$ meteor remove standard-minifier-css
$ meteor add juliancwirko:postcss
```

in the package.json
```
{
  "name": "test-npm-scss",
  "private": true,
  "scripts": {
    "start": "meteor run"
  },
  "dependencies": {
    "foundation-sites": "^6.2.1",
    "meteor-node-stubs": "~0.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^6.3.6"
  },
  "postcss": {
    "plugins": {
        "autoprefixer": {
            "browsers": ["last 2 versions", "ie >= 9", "and_chr >= 2.3"]
        }
    }
  }
}
```

### How to import files:

in your `main.scss` file in the app:

```css
@import '{}/node_modules/foundation-sites/scss/foundation.scss';

// include all
@include foundation-everything;

// or only some components
```

example: [main.scss file in this repo](https://github.com/juliancwirko/meteor-npm-foundation-test/blob/master/client/main.scss)


in your `main.js` file import foundation js:

```javascript
import 'foundation-sites/dist/foundation.js';

// or you can import only some of the components from 'node_modules/foundation-sites/js'
```

example: [main.js file in this repo](https://github.com/juliancwirko/meteor-npm-foundation-test/blob/master/client/main.js#L7)



---

Foundation for Sites 6 Docs: [http://foundation.zurb.com/sites/docs/](http://foundation.zurb.com/sites/docs/)

