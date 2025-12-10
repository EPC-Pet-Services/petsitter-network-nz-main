const Stripe = require('stripe');

const FRONTEND_URL = process.env.FRONTEND_URL || 'https://www.failsafe-pet.courses';
const stripeSecret = process.env.STRIPE_SECRET_KEY || '';

const stripe = new Stripe(stripeSecret, {
  apiVersion: '2022-11-15',
});

exports.handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': FRONTEND_URL,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { priceId, quantity = 1, bookingId, customerEmail } = body;

    if (!priceId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing priceId' }),
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': FRONTEND_URL },
      };
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{ price: priceId, quantity }],
      success_url: `${FRONTEND_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${FRONTEND_URL}/payment/cancel`,
      customer_email: customerEmail,
      client_reference_id: bookingId,
      metadata: { bookingId: bookingId ?? '' },
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': FRONTEND_URL },
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    console.error('create-checkout-session error:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': FRONTEND_URL },
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
