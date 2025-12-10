export async function startCheckout(priceId: string, bookingId?: string, customerEmail?: string) {
  const base = import.meta.env.VITE_API_BASE_URL || '';
  const url = `${base.replace(/\/$/, '')}/create-checkout-session`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId, quantity: 1, bookingId, customerEmail }),
  });

  if (!res.ok) {
    let errBody = null;
    try { errBody = await res.json(); } catch (_) { errBody = await res.text(); }
    throw new Error(`Failed to create checkout session: ${res.status} ${JSON.stringify(errBody)}`);
  }

  const data = await res.json();
  if (data && data.url) {
    // Use location.href to preserve navigation semantics
    window.location.href = data.url;
    return;
  }

  throw new Error('No URL returned from checkout session creation');
}

export default startCheckout;
