### Meteor + Foundation 6 from Npm

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

Foundation for Sites 6 Docs: [http://foundation.zurb.com/sites/docs/](http://foundation.zurb.com/sites/docs/)

