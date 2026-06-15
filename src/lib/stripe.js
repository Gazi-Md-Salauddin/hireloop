import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1TiSjB2XAVuGufvCripvnVxI',
    'seeker_premium': 'price_1Ticku2XAVuGufvCSENypTxA',
    'recruiter_growth': 'price_1TfP9zIzLpOm3WSXfNhY0LOn',
    'recruiter_enterprise': 'price_1TfPAhIzLpOm3WSXWWJFbXZl'
}