# Abandoned checkout recovery webhooks

## Project information

1.  Backend : NodeJs
2.  Database: MongoDb

## How to run the project

1. Clone the respository
2. Create .env variable with your MONGODB_URL.
3. run ` npm install`
4. run `npm run start`

## Webhooks

1.  `localhost:3000/checkout/cartAbandoned ` cart apandoned webhook
2.  `localhost:3000/orders/placed ` order placed webhook

## Database

1.  create collection ` db.createCollection("followups")`
