# payment-card-api
This is a node.js PaymentCard API, powered by Express that provides the main functions.
This API was created to give support to test a payment-api to a feature.

Setup
-Clone this repo to your desktop and run 'npm install' to install all the dependencies.

-You might want to look into index.js to make change the port you want to use.
Dicas de excução do projeto;

Usage
After you clone this repo to your desktop, go to its root directory and run npm install to install its dependencies.

Its supose to run by comand line but you can also run by postman.

Once the dependencies are installed, you can run npm start or npm index.js or to use the nodemon to start the application.

how to use de application:

	-To find a payment:
	curl http://localhost:3001/cards/authorize -X POST -v -H "Content-type: application/json" -d @files/card.json | json_pp
