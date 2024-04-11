'use server'

import { auth } from '@/services/auth'
import { createCheckoutSession } from '@/services/stripe'
import { redirect } from 'next/navigation'

export async function createCheckoutSessionAction() {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'User not found',
      data: null,
    }
  }

  const checkoutSession = await createCheckoutSession(
    session?.user?.id,
    session?.user?.email || '',
    session.user.stripeSubscriptionId || '',
  )

  if (!checkoutSession) {
    return {
      error: 'Error to create checkout session',
      data: null,
    }
  }
  if (!checkoutSession.url) return
  redirect(checkoutSession.url)
}
