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

##

## Assumption :

1. cart-token is unique to each cart and is the deciding factor whether the order for that cart was placed or not.
2. If the items in the cart are changed the cart-token will remain the same.

## Logic

1. For each abandoned cart webhook request a 3 entry in followup collection is made with schedule time as (30 hrs,24hrs,72 hrs) and status as Pending
2. Combination of cart-token and scheduled date is unique so for a given cart-token multiple entries won't be created.
3. A cron will be running every 30 seconds which will pick all pending followups and if its lesser or equal to current time it will send communication and change the status to either Completed or Failed.
4. On Order placed webhook request all the followup with status as pending and cart-token same as in the request is updated to status as cancelled.
