// This is your test secret API key.
// heroku login --> git init --> git add . --> git commit -am "" --> git subtree push --prefix BackEnd heroku master
require('dotenv').config();

const stripe = require('stripe')(process.env.stripeApiKey);

const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

const storeItems = new Map([
  [1, { price: 'price_1KtC6wEjQbs32fBJUMdD12ol', quantity: 1 }],
  [2, { price: 'price_1KtCAlEjQbs32fBJih4LpIOn', quantity: 1 }],
  [3, { price: 'price_1KtCBoEjQbs32fBJ7dWe69vq', quantity: 1 }],
  [4, { price: 'price_1KtCCQEjQbs32fBJxhCBKeAE', quantity: 1 }],
  [5, { price: 'price_1KtCDDEjQbs32fBJSFw8xvpS', quantity: 1 }],
  [6, { price: 'price_1KtCDsEjQbs32fBJZ3aKRlok', quantity: 1 }],
  [7, { price: 'price_1LFRtWEjQbs32fBJfvfnakaj', quantity: 1 }],
  [8, { price: 'price_1LFRv0EjQbs32fBJpg3ZrCSG', quantity: 1 }],
  [9, { price: 'price_1LFRvzEjQbs32fBJTrajUpB0', quantity: 1 }],
]);

app.post('/create-checkout-session', async (req, res) => {
  const item = req.body.carts;

  const items = item.map((item) => {
    return storeItems.get(item.id);
  });

  console.log(items);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_address_collection: {
      allowed_countries: ['US'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 2000,
            // this
            currency: 'usd',
          },
          display_name: 'Free shipping',
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          },
        },
      },
      {},
    ],

    line_items: items,

    mode: 'payment',
    success_url: `https://brittany-art.com/Thankyou?success=true`,
    cancel_url: `https://brittany-art.com/?canceled=true`,
  });

  res.json({ url_: session.url });
});

app.listen(PORT, () => console.log('Running on port 4000'));
