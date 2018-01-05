# react-app-architecture

## Reference architecture to build an universal web app by using the following tools:

* React 16
* Babel
* NodeJS + Express
* Webpack
* SASS
* ESLint

  This app is just an empty app with an example single and trivial component, in order to give a reference about how to structure and build a proper architecture for a Universal App.
  The folder structure is just a suggestion. The app uses webpack to serve only one .js resource and one .css resource. It also uses server side rendering, all with the purpose of having good perfomance.
  This architecture should not be used for an SPA application, since it does not implement React Router. All the routing is made via express.

## Build the application
    npm run build
    
## Run the server
    npm run start
