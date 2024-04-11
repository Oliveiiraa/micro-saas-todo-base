export const config = {
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
    webhookSecret: '',
    plans: {
      free: {
        priceId: 'price_1P4ClHChXvTh138DJar00Nr5',
        quota: {
          TASKS: 5,
        },
      },
      pro: {
        priceId: 'price_1P4ClTChXvTh138DfCQnQcbA',
        quota: {
          TASKS: 100,
        },
      },
    },
  },
}
