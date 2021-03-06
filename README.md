#AT&T Hackathon [![Build Status](https://travis-ci.org/A92hm/att-hackathon.svg)](https://travis-ci.org/A92hm/att-hackathon) [![Dependency Status](https://david-dm.org/a92hm/att-hackathon.svg)](https://david-dm.org/a92hm/att-hackathon) [![devDependency Status](https://david-dm.org/a92hm/att-hackathon/dev-status.svg)](https://david-dm.org/a92hm/att-hackathon#info=devDependencies)
This is the fullstack web application created for the AT&T Hackathon project to use AT&T APIs in order to automate the sales process. 

##Usage
###Install
```bash
git clone https://github.com/A92hm/att-hackathon.git && cd att-hackathon
npm install
bower install
```
###Execution
You need to have MongoDB running on your machine or change the mongo's URL to a remote machine.
To develop:
```bash
grunt serve
```
To see what the final product looks like:
```bash
grunt serve:dist
```
To build final product:
```bash
grunt build
```

To serve final product:
```bash
NODE_ENV='production' [optional port] [other environmental variables] node dist/server/app.js
```

##Dependencies
* [MongoDB](http://www.mongodb.org/downloads)
* [node](http://nodejs.org)
* [npm](https://www.npmjs.com)
* [bower](https://github.com/bower/bower)
* [grunt](http://gruntjs.com)

###Generator
This application was generated by [DaftMonk:generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack). To install and checkout the documentation see [readme](https://github.com/DaftMonk/generator-angular-fullstack/blob/master/readme.md).

##Structure
    att-hackathon
    .
    ├── .siren.sublime-workspace        - Sublime text edit workspace configuration
    ├── .siren.sublime-project          - Sublime text edit workspace configuration protractor.conf.js
    ├── .protractor.conf.js             - Protractor configuration
    ├── .karma.conf.js                  - Karma configuration
    ├── .travis.yml                     - Travis CI configuration
    ├── .gitattributes
    ├── .buildignore
    ├── .editorconfig
    ├── .gitignore
    ├── .yo-rc.json
    ├── Gruntfile.js                    - Grunt configuration
    ├── package.json                    - Used npm packages
    ├── bower.json                      - Used bower packages
    ├── node_modules                    - Contains bower modules
    ├── README.md
    ├── client                          - Contains client files (mostly static)
    │   ├── bower_components            - Contains bower modules (created by running bower install)
    │   ├── assets
    │   │   └── images
    │   ├── .jshint                     - JSHint configuration
    │   ├── index.html
    │   ├── robots.txt                  - Instruction for crawlers [About](www.robotstxt.org/)
    │   ├── components                  - Contains angular modules for different services
    │   └── app
    │       ├── app.js                  - Angular application
    │       └── [views]                 - Different angular views
    └── server                          - Contains server side scripts
        ├── .jshintrc                   - JSHint configuration
        ├── app.js                      - Node/Express application 
        ├── views                       - Server side view templates 
        ├── config                      - Contains config files for express, sockets
        │   ├── express.js
        │   ├── local.env.samples.js    - Contains environmental variables ONLY FOR DEVELOPMENT
        │   ├── seed.js                 - Populated the database
        │   ├── socketio.js
        │   └── environment             - Contains environmental settings
        │       ├── index.js
        │       ├── development.js
        │       ├── production.js
        │       └── test.js
        ├── components                  - Contains different components such as error handling
        ├── auth                        - Contains authentication methods
        │   ├── index.js
        │   ├── auth.services.js
        │   └── local                   - PassportJS methods
        │       ├── index.js
        │       └── passport.js
        └── api                         - Contains the objects and apis
            └── [name]
                ├── index.js            - Defines the routes (urls) for this api
                ├── [name].controller.js- Contains the logic and methods
                ├── [name].model.js     - Mongoose model for the api
                ├── [name].socket.js    - Contains the logic for sockets
                └── [name].spec.js      - Test file definition

##[Potential Bugs](https://github.com/A92hm/att-hackathon/issues)

##To do

##License
[MIT license](http://opensource.org/licenses/MIT) 
