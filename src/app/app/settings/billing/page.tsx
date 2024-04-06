import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default async function Page() {
  return (
    <Card>
      <CardHeader className="border-b border-border">
        <CardTitle>Uso do Plano</CardTitle>
        <CardDescription>Exibir o uso do plano</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <header className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">1/5</span>
            <span className="text-muted-foreground text-sm">20%</span>
          </header>
          <main>
            <Progress value={20} />
          </main>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t border-border pt-6">
        <span>Não há detalhes disponíveis sobre o uso do plano.</span>
        <Button>Atualizar para Pro</Button>
      </CardFooter>
    </Card>
  )
}
