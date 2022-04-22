// This is your test secret API key.
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
  [1, { price: 'price_1KnhrqEjQbs32fBJCfu2LmC9', quantity: 1 }],
  [2, { price: 'price_1KnhxoEjQbs32fBJdPIYcM8J', quantity: 1 }],
  [3, { price: 'price_1Kni0aEjQbs32fBJmTi4w0Hv', quantity: 1 }],
  [4, { price: 'price_1Kni45EjQbs32fBJfDTYI2UK', quantity: 1 }],
  [5, { price: 'price_1Kni5BEjQbs32fBJRfcPtC1H', quantity: 1 }],
  [6, { price: 'price_1Kni6KEjQbs32fBJJOPXNdcD', quantity: 1 }],
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
            amount: 1500,
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
    success_url: `https://brittanyshop.netlify.app/Thankyou?success=true`,
    cancel_url: `https://brittanyshop.netlify.app/?canceled=true`,
  });

  res.json({ url_: session.url });
});

app.listen(PORT, () => console.log('Running on port 4000'));
