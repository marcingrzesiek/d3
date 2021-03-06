var d3 = require("../index");

console.log(JSON.stringify({
  "name": "d3",
  "version": d3.version,
  "description": "A small, free JavaScript library for manipulating documents based on data.",
  "keywords": [
    "dom",
    "w3c",
    "visualization",
    "svg",
    "animation",
    "canvas"
  ],
  "homepage": "http://d3js.org",
  "author": {
    "name": "Mike Bostock",
    "url": "http://bost.ocks.org/mike"
  },
  "contributors": [
    {
      "name": "Jason Davies",
      "url": "http://jasondavies.com"
    }
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/mbostock/d3.git"
  },
  "main": "index.js",
  "browserify": "index-browserify.js",
  "jam": {
    "main": "d3.js",
    "shim": {
      "exports": "d3"
    }
  },
  "dependencies": {
    "jsdom": "~0.5.3"
  },
  "devDependencies": {
    "smash": "~0.0.8",
    "uglify-js": "git://github.com/mishoo/UglifyJS2.git#3bd7ca9961125b39dcd54d2182cb72bd1ca6006e",
    "vows": "0.7.x"
  },
  "scripts": {
    "test": "node_modules/.bin/vows"
  },
  "licenses": [
    {
      "type": "BSD",
      "url": "https://github.com/mbostock/d3/blob/master/LICENSE"
    }
  ]
}, null, 2));
