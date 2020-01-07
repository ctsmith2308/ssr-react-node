### Configurations: `webpack, package.json, .babelrc`

`webpack.server.js, webpack.client.js, webpack.base.js`

Server differs only in that is has an additiona rule: `externals:[nodeExternals()]`. webpack.base.js is imported in both webpack configs.

`package.json`
Use `npm-run-all` to build and run all webpack configs.

`.babelrc`
Needed to add a config with:

```{
 "presets": ["@babel/preset-env", "@babel/preset-react"],
 "plugins": ["@babel/plugin-transform-runtime"]
}
```
