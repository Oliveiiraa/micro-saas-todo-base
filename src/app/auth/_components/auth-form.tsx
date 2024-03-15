'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { toast } from '@/components/ui/use-toast'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { EnvelopeClosedIcon, SymbolIcon } from '@radix-ui/react-icons'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data) => {
    setIsLoading(true)

    try {
      await signIn('nodemailer', { email: data.email, redirect: false })
      toast({
        title: 'Magic link enviado!',
        description: 'Verifique seu email para acessar sua conta.',
      })
      setIsLoading(false)
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Ocorreu um erro ao enviar o magic link. Tente novamente.',
      })
      setIsLoading(false)
    }
  })

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...form.register('email')}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <SymbolIcon className="mr-2 h-4 w-4 animate-spin" />}
            Acessar com Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Ou continue com
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <SymbolIcon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
        )}{' '}
        Gmail
      </Button>
    </div>
  )
}
