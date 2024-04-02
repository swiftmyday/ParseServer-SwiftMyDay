![parse-repository-header](https://swiftmyday.github.io/Deposit/banner.png)

Parse server forked by SwiftMyDay. 

Thanks to [Parse Server](https://github.com/ParsePlatform/parse-server) for making this possible.


Documentation [Parse Docs](https://docs.parseplatform.org)


# Remote Deployment

## Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/swiftmyday/ParseServer-SwiftMyDay)

Alternatively, to deploy manually:

1. Install Heroky CLI [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
2. Clone this repo and change directoty to it
3. Using terminal type `heroku login`
4. Type `heroku create` to create an app in heroku
5. Deploy your local code to heroku by typing `git push heroku master`


# Local Development

To run the server on your local machine just follow these steps:

1. Make sure to have the latest Node js version installed [NodeJS](https://nodejs.org/en)
2. Clone this repository and change directory to it.
3. Run `npm install`.
4. Install a MongoDB database locally. [Install MongoDB](https://www.mongodb.com/docs/v3.0/tutorial/install-mongodb-on-os-x/)
5. Run `mongo` to connect to your database, just to make sure it's working. Once you see a mongo prompt, exit with `Control-D`.
6. Launch Parse Server with `npm start`. By default it will run on `localhost/parse`.

Your Parse Server is now running and is connected to your local database named `dev` in which the data is stored that you manage via Parse Server.

[license-svg]: https://img.shields.io/badge/license-BSD-lightgrey.svg
[license-link]: LICENSE
[open-collective-link]: https://opencollective.com/parse-server
