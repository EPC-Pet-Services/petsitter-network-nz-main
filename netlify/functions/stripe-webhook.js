const Stripe = require('stripe');

const FRONTEND_URL = process.env.FRONTEND_URL || 'https://www.failsafe-pet.courses';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-11-15',
});
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || '';

exports.handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': FRONTEND_URL,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Stripe-Signature',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Obtain raw body for signature verification
  const sig = (event.headers && (event.headers['stripe-signature'] || event.headers['Stripe-Signature'])) || '';
  const rawBody = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64') : (event.body || '');

  let stripeEvent;
  try {
    stripeEvent = stripe.webhooks.constructEvent(rawBody, sig, STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return { statusCode: 400, body: `Webhook Error: ${err instanceof Error ? err.message : String(err)}` };
  }

  try {
    switch (stripeEvent.type) {
      case 'checkout.session.completed': {
        const session = stripeEvent.data.object;
        // TODO: update booking status in Supabase using Admin key / service role
        console.log('Checkout completed for session:', session.id, 'metadata:', session.metadata);
        break;
      }
      case 'payment_intent.succeeded': {
        console.log('PaymentIntent succeeded:', stripeEvent.data.object.id);
        break;
      }
      default:
        console.log('Unhandled event type:', stripeEvent.type);
    }
  } catch (err) {
    console.error('Error handling webhook event:', err);
    return { statusCode: 500, body: 'Webhook handler error' };
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ received: true }),
  };
};
