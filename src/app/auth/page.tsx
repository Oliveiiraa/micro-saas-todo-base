import { Metadata } from 'next'
import Link from 'next/link'
import { AuthForm } from './_components/auth-form'
import { RocketIcon } from '@radix-ui/react-icons'

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <RocketIcon className="w-8 h-8 mr-2" />
            TODO
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Crie sua conta
              </h1>
              <p className="text-sm text-muted-foreground">
                Já tem uma conta?{' '}
                <Link href="/auth/login" passHref>
                  Acesse agora
                </Link>
              </p>
            </div>
            <AuthForm />
          </div>
        </div>
      </div>
    </>
  )
}
