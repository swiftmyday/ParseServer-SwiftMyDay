![parse-repository-header](https://swiftmyday.github.io/Deposit/banner.png)

Parse server forked by SwiftMyDay. 

Thanks to [Parse Server](https://github.com/ParsePlatform/parse-server) for making this possible.


Documentation [Parse Docs](https://docs.parseplatform.org)


##

# Why Parse Server?

This open-source project offers you full control over your data and unparalleled flexibility. Here’s why you’ll love using it:

- [x] **Full Control of Your Data**: Own your data and how it’s managed.
- [x] **Open Source**: Leverage support and improvements from a vibrant open-source transparent community.
- [x] **No Strings Attached**: Free yourself from platform lock-in.
- [x] **Seamless Migration**: Not happy with your cloud provider? Easily switch providers with your server in tow.
- [x] **Super Secure**: Robust security features to protect your data.
- [x] **Cost-Effective**: Extremely cheap to maintain and scale.
- [x] **Scalable**: Effortlessly scale as your application grows.
- [x] **Extensible**: Add or modify features with ease using plugins and middleware.

<br></br>
# Getting started ✅

In order to start using your Parse Server you need to deploy the server in a Cloud Provider ☁️<br>
Just click "Deploy to XXXX" button on your favorite Cloud provider and follow the instructions. That's it!

Alternative you can deploy your server locally in your computer. Steps also below.
<br></br>

## Deploy server on &nbsp; <img src="https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/89884/render-status-4b015255-e0cc-422c-943d-4f60b5f03094.png"  width="120">

Render offers a **free plan** for development. Friendly and simple UI.
<br></br>
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

1. Click "Deploy to render" button
2. Look for **Public Git repository** and paste this repo URL -> https://github.com/swiftmyday/ParseServer-SwiftMyDay
3. You might be prompt to input a blueprint name which can be any name you want
4. You will be prompt to input `DATABASE_URI`, `AWS_ACCESS_KEY`, `AWS_SECRET_KEY`, `BUCKET_NAME`. In order to get these values follow steps down below for AWS and MongoDB
6. Click deploy and your server will be up and running.
7. Go to Dashboard > Click on your recently deployed server > Environment > and replace the `SERVER_URL` with your RenderURL/parse. Ex: https://swiftmyday-parse-server.onrender.com/parse


<br></br>
## Deploy server on &nbsp; <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/1024px-Heroku_logo.svg.png"  width="120">

Heroku **does not offer a free plan** but the cheapest plan starts at $5.
<br></br>

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/swiftmyday/ParseServer-SwiftMyDay)

1. Create a Heroku account
2. Click "Deploy to heroku" button
3. Fill the form
4. You will be prompt to input `DATABASE_URI`, `AWS_ACCESS_KEY`, `AWS_SECRET_KEY`, `BUCKET_NAME`. In order to get these values follow steps down below for AWS and MongoDB
5. Click deploy and your server will be up and running
6. Go to Settings > copy the URL under domains next to "Your app can be found at"
7. Click on **Reveal Config Vars** and replace the SERVER_URL with the url from step 6. Make sure the /parse is at the end of the URL. Ex: https://swiftmydayserver.herokuapp.com/Parse

##
<br></br>
## Create and connect AWS

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"  width="80">

In order to obtain the `AWS_ACCESS_KEY_ID` and the `AWS_SECRET_ACCESS_KEY` follow these instructions:

1. Create or open your AWS account [AWS Console](https://aws.amazon.com)
2. On the search bar look for `S3`
3. Inside S3 click on `create bucket`
4. Name your bucket and tap `create bucket`
5. Go to the search bar and look for `IAM`
6. Inside <b>IAM</b> look for `security credentials`
7. Click on `create access key`
8. Accept the disclamer and click `create access key` 
9. Copy the **Access Key**(`AWS_ACCESS_KEY_ID`) and the **Secret Access Key** (`AWS_SECRET_ACCESS_KEY`)

<br></br>
## Create and connect Mongo DB database

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"  width="180">

In order to obtain the `DATABASE_URI` follow these instructions:

1. Create and account at [MongoDB](http://mongodb.com)
2. Once logged int, on the left menu click on `database` then `build a database`
3. Select the free or paid version and click `create deployment`
4. A popup should show up asking to create a `username` and `password`
   - If the previous popup never showed up, go to `database access` on the left side menu and click `add new database user`
6. Click again on `databases` and look for the database created on the step 3
7. Click `connect`, then `drivers`
8. Copy the URL from section No. 3 and close the popup.
9. Paste the URL in your notes, and replace `<password>` with the password created in step 4

##

<br></br>
# Deploy your server locally 🖥️

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
