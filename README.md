# Initializing Webpack with React

Add Webpack with:

    npm i webpack webpack-cli -D
Basic configuration in `root` directory with file `webpack.config.js`

```javascript
    const path = require('path');
    module.exports = {
    entry: './src/index.js',
    output: {
     path: path.join(__dirname, '/dist'),
     filename: 'bundle.min.js'
  }
}
```

Add React:

    npm i react react-dom
    
Lets modify scripts in our `package.json` file

```json
"scripts": { 
  "start": "webpack --mode development", 
  "build": "webpack --mode production" 
}
```

To serve everything to `HTML` we need webpack plugin for that:

    npm i html-webpack-plugin -D

We need to add to our `webpack.config.js`

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]

```

If we want to develop our project we can use `webpack-dev-server` with live reloading.

    npm i webpack-dev-server -D

Now we need to update our `start scripts` in `package.json`

```json
"scripts": { 
  "start": "webpack-dev-server --mode development --open --hot", 
  "build": "webpack --mode production" 
}
```
