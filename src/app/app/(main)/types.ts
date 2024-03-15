import { ReturnTypeWithoutPromise } from '@/types/return-type-without-promise'
import { getUserTodos } from './actions'

export type Todo = ReturnTypeWithoutPromise<typeof getUserTodos>[0]

export type TodoUpsertSheetProps = {
  children?: React.ReactNode
  defaultValue?: Todo
}
