# Brittany's Art
Brittany's Shop is a shop that is designed to sell my client's artwork. 
It was created with React, node, and the Stripe Payment API
This repository has both the BackEnd and FrontEnd to this project, so keep that in mind when trying to run it.
If you plan on revising this code, I highly recommend make two separate repositories, to make hosting easier for both the frontend and backend

The FrontEnd: was created with create-react-app, however, if you plan on making your own modification, clone this Repo.

$ git clone repo
$ cd FrontEnd
$ git remote remove origin

Install dependencies

$ npm install
$ npm start 

In the context change the product's initial state to whatever your products are going to be, make sure to keep the IDs for any product you make(important for server.js) Also make sure to change the Axios call in the CartActions component to where ever you are running your server(most likely localhost)

the app should work well with this configuration, and you can host it easily at netlify

BackEnd:

$ git clone repo
$ cd  BackEnd
$ git remote remove origin

Install dependencies

$ npm install

Now you have to make a stripe payment account and get an API key, in the server.js add this key either directly or as an env like I have it.
The 6 keys below that are products, and on the stripe website, you can make your own products and get your own keys for those products. In the new Map in the server
make sure that the product key and ID are the correct pair. After editing everything to your products you are ready to run it locally and test it.

$ npm run dev 

this will start the server and now on your frontend, everything should be running smoothly.
