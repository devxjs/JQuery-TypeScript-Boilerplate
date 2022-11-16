var path=require('path');
var webpack=require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {
    mode: "development",
    devtool: "source-map",
    watch:true,
    entry: "./src/app.ts",
    output: {
        path:__dirname +"/public/js",// or path: path.join(__dirname, "dist/js"),
        filename: "app.js"
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { 
            test: /\.tsx?$/, 
            include:path.resolve(__dirname,"src"),
            loader: "ts-loader" 
        }
      ]
    },
    plugins: [
        new BrowserSyncPlugin({
          // browse to http://localhost:3000/ during development,
          // ./public directory is being served
          host: 'localhost',
          port: 3000,
          server: { baseDir: ['public'] }
        })
      ]
  };