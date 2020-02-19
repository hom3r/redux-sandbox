# Redux Sandbox

Basic setup to play around with Redux (or any other front-end JS library). You can use ES6 since babel is integrated out of box.

## Develop

Local development can be run via npm
```
npm run dev
```

This will transpile the `client.js` file and bundle it with all the dependencies. 
Development server then starts on http://localhost:3000 via Browsersync.

## Deploy
In case you would like to deploy the application, first build it

```
npm run build
```

Then you can copy the `index.html` file along with the `dist/` folder to the desired server root folder.
