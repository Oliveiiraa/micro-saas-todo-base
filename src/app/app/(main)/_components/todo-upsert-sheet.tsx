'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useRef } from 'react'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { TodoUpsertSheetProps } from '../types'
import { upsertTodo } from '../actions'
import { zodResolver } from '@hookform/resolvers/zod'
import { upsertTodoSchema } from '../schema'
import { useRouter } from 'next/navigation'
import { toast } from '@/components/ui/use-toast'

export function TodoUpsertSheet({ children }: TodoUpsertSheetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const form = useForm({ resolver: zodResolver(upsertTodoSchema) })

  const onSubmit = form.handleSubmit(async (data) => {
    await upsertTodo(data)
    router.refresh()

    ref.current?.click()

    toast({
      title: 'Todo saved!',
      description: 'Your todo has been saved successfully.',
    })
  })

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div ref={ref}>{children}</div>
      </SheetTrigger>
      <SheetContent>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-8">
            <SheetHeader>
              <SheetTitle>Todo</SheetTitle>
              <SheetDescription>
                Create a new todo or update an existing one.
              </SheetDescription>
            </SheetHeader>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your todo title" {...field} />
                  </FormControl>
                  <FormDescription>
                    This will be the publicly displayed name for task.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SheetFooter className="mt-auto">
              <Button type="submit">Save changes</Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
