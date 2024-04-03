![parse-repository-header](https://swiftmyday.github.io/Deposit/banner.png)

Parse server forked by SwiftMyDay. 

Thanks to [Parse Server](https://github.com/ParsePlatform/parse-server) for making this possible.


Documentation [Parse Docs](https://docs.parseplatform.org)


##

# Remote Deployment

## Requirements:

1. Deploy server on `Heroku`
2. Create and connect `AWS S3 Bucket` for files
3. Create and connect `Mongo DB`

<br></br>
## Deploy server on Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/swiftmyday/ParseServer-SwiftMyDay)

Alternatively, to deploy manually:

1. Install Heroku CLI [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
2. Clone this repo and change directoty to it
3. Using terminal type `heroku login`
4. Type `heroku create` to create an app in heroku
5. Deploy your local code to heroku by typing `git push heroku master`

<br></br>
## Create and connect AWS S3 Bucket

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"  width="80">

1. Create or open your AWS account [AWS Console](https://aws.amazon.com)
2. On the search bar look for `S3`
3. Inside S3 click on `create bucket`
4. Name your bucket and tap `create bucket`
5. Go to the search bar and look for `IAM`
6. Inside <b>IAM</b> look for `security credentials`
7. Click on `create access key`
8. Accept the disclamer and click `create access key`
9. Copy the `Access Key` and the `Secret Access Key`
10. Go to your <b>Heroku server settings</b> and add them to `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`

<br></br>
## Create and connect Mongo DB database

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"  width="180">

1. Create or open your mongoDB account [MongoDB](http://mongodb.com)
2. On the left menu click on `database` then `build a database`
3. Select the free or paid version and click `create deployment`
4. A popup should show up asking to create a `username` and `password`
   - If the previous popup never showed up, go to `database access` on the left side menu and click `add new database user`
6. Click again on `databases` and look for the database created on the step 3
7. Click `connect`, then `drivers`
8. Copy the code from section No. 3 and close the popup.
9. Go to your <b>Heroku server</b> and paste the code copied on step 8 on `DATABASE_URI`
10. You might notice that the previous code has a section for a `<password>`, replace that password for the password created on step 4. Make sure the <b>username</b> is the same create on step 4 too.

<br></br>
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
