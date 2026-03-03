# Casa Nina Carignano — Setup Instructions

## 1. Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# ── Base URL ──
# Your deployed URL (no trailing slash). Used for Stripe redirect URLs.
NEXT_PUBLIC_BASE_URL=https://your-domain.com

# ── Pricing ──
# Nightly rate in EUR cents (e.g. 15000 = €150.00)
NIGHTLY_RATE_CENTS=15000
# Cleaning fee in EUR cents (e.g. 5000 = €50.00)
CLEANING_FEE_CENTS=5000

# ── Stripe ──
# Get these from https://dashboard.stripe.com/apikeys
STRIPE_SECRET_KEY=sk_test_...
# Webhook signing secret — see "Webhook Setup" below
STRIPE_WEBHOOK_SECRET=whsec_...

# ── iCal Calendar Sync ──
# iCal URL from Airbnb, Booking.com, or any calendar provider.
# Used to automatically block unavailable dates on the booking calendar.
# Leave empty if you don't need calendar sync yet.
ICAL_URL=https://www.airbnb.com/calendar/ical/XXXXX.ics?s=XXXXX

# ── Vikey (The Bridge) ──
# Vikey API key for automated Alloggiati Web check-in & smart lock.
# Get these from your Vikey dashboard: https://app.vikey.it
VIKEY_API_KEY=vk_...
VIKEY_PROPERTY_ID=your-property-id
```

## 2. Stripe Setup

### API Keys
1. Go to [Stripe Dashboard → API Keys](https://dashboard.stripe.com/apikeys)
2. Copy your **Secret key** (`sk_test_...` for testing, `sk_live_...` for production)
3. Set it as `STRIPE_SECRET_KEY` in `.env.local`

### Webhook Setup
The webhook at `/api/webhook/stripe` handles successful payments and triggers Vikey automation.

**For local development:**
1. Install the [Stripe CLI](https://stripe.com/docs/stripe-cli)
2. Run: `stripe listen --forward-to localhost:3000/api/webhook/stripe`
3. Copy the webhook signing secret (`whsec_...`) and set it as `STRIPE_WEBHOOK_SECRET`

**For production:**
1. Go to [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/webhooks)
2. Add endpoint: `https://your-domain.com/api/webhook/stripe`
3. Select event: `checkout.session.completed`
4. Copy the signing secret and set it as `STRIPE_WEBHOOK_SECRET`

## 3. iCal Calendar Sync

The booking calendar automatically blocks dates from an iCal feed. This works with:
- **Airbnb**: Settings → Calendar → Export Calendar → copy the `.ics` URL
- **Booking.com**: Property → Calendar & Pricing → Sync Calendars → copy iCal URL
- **Any iCal provider**: any standard `.ics` URL

Set the URL as `ICAL_URL` in `.env.local`. The feed is cached for 1 hour.

## 4. Vikey Setup

Vikey automates:
- **Alloggiati Web** registration (Italian legal guest check-in)
- **Smart lock** access code generation

1. Sign up at [Vikey](https://www.vikey.it)
2. Add your property and get your **API key** and **Property ID**
3. Set them as `VIKEY_API_KEY` and `VIKEY_PROPERTY_ID` in `.env.local`

## 5. Images

Add your apartment photos to `public/images/`:

| Filename           | Description                              | Recommended Size |
|--------------------|------------------------------------------|------------------|
| `hero.jpg`         | Hero image — best interior/overview shot | 1920 × 1080 px   |
| `living-room.jpg`  | Living room / workspace                  | 1200 × 800 px    |
| `kitchen.jpg`      | Kitchen                                  | 800 × 600 px     |
| `bedroom.jpg`      | Bedroom                                  | 800 × 600 px     |
| `bathroom.jpg`     | Bathroom                                 | 800 × 600 px     |
| `view.jpg`         | View from the apartment                  | 800 × 600 px     |
| `workspace.jpg`    | Desk / workspace detail                  | 1200 × 600 px    |

All images are rendered with `object-fit: cover`, so they can be any aspect ratio — the layout handles cropping automatically.

## 6. CIN (Codice Identificativo Nazionale)

Update the CIN placeholder in `src/app/page.tsx` (footer section):

```tsx
<span className="font-mono text-xs">IT-010025-XXXXXXXXXX</span>
```

Replace `IT-010025-XXXXXXXXXX` with your actual CIN code.

## 7. Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 8. Deployment

This is a standard Next.js application. Deploy to:

- **Vercel** (recommended): `npx vercel` or connect your Git repo
- **Railway** / **Render**: Docker or Node.js buildpack
- **Self-hosted**: `npm run build && npm start`

Remember to set all environment variables in your hosting provider's dashboard.
