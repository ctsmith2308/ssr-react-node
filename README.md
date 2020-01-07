#### Configurations: `webpack, package.json, .babelrc`

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

#### Structure and files

`src/index.js`

Api server that handles client request to server side rendered assets. Uses a proxy to forward requests made to `api/` to another url for authentication purposes. 

`createStore.js` 

Server Side redux store that is shared to client. Handles the cookies for authentication for first time request to app. Uses an `axios` instance that is added to `thunk.withExtraArgument(axiosInstance)` that ha


