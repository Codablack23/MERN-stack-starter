# Full Stack Project Architecture Starter

## Frontend Structure

-The client/frontend of this project is a vite-react project, The folder consist of the basic Vite structure which includes;

 1. The public folder (for holding public assets)
 2. The src folder (for holds all our custom code)
 3. The vite.config.js file (for vite specific configurations)
 4. The gitignore file (for adding files that should not be sent to github)
 5. eslint.config.js (for linting and validating clean code)
 6. index.html page  (the initial html page react renders on)
 7. package.json file for managing our packages
 8. README.md - basic description of our site

|-public
|-src
|-.gitignore
|-eslint.config.js
|-index.html
|-package.json
|-README.md
|-vite.config.js

-In the src folder we have decided to use of feature based approach and which is meant to seperate every feature as a standalone folder and is meant hold files and components related to the feature in the same folder

-For example if we have an orders, cart and checkout feature, we would have a folder that stores every components and files related to that feature eg-

|-features
| |-orders
| | |-page.jsx
| | |-hook.jsx
| | |-service.js
| |-cart
| | |-page.jsx
| | |-hook.jsx
| | |-service.js
| |-checkout
| | |-page.jsx
| | |-hook.jsx
| | |- service.jsx
| |-etc...

-in the case above we see that we would have a better time adding new  features because it does little side effect to the project and improves overall developer experience

-but in the above structure there is a problem, the features are standalone but some core functionality might be reused in another feature which we have to account for, so in that case a common folder is created which is used for holding global functions, components, etc hooks that would be potentially shared accross the entire project and also a config folder which holds basic configuration files for the project

-in the end our project structure looks more like

|-src
| |-common
| | |-components
| | |-hooks
| | |-services
| |-config
| | |-router.js
| | |-etc
| |-features
| | |-orders
| | |-cart
| | |-checkout
| | |-etc...
| |-lib

## Backend Structure

-The server/backend folder structure is an node and express project and has a lot of freedom but we have decided to use a similar project structure in the frontend/client

-The server project is meant to have a structure similar to a  micro-service style of architecture where every feature/unit is stored and as an individual folder and related models, controllers are stored in the same folder

-but just like the problems posed in the frontend structure some extra folders where added for shared logic and services that are used in the entire project and also a core folder is added for general configurations needed for the project to work

-in summary the folders and files for the server are:

1. app folder - for holding microservice/features
2. common folder - for holding files that are shared across the project
3. core folder - for holding core logic and configuration needed for the project to run
4. lib folder - holding custom packages created for the project
5. .env file - holding secret keys that are not pushed to github
6. main.js - our main file for starting our server
7. package.json - keeping track of our packages

|-app
| |-micro-1
| |-mico-2
| |-etc...
|-common
| |-middlewares
| |-services.js
| |-etc...
|-core
| |-config
| |-core.routing.js
| |-core.error-handler.js
| |-etc...
|-lib
|-.env
|-main.js
|-package.json
