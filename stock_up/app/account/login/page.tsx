import Link from "next/link";
import { Button } from "../../../components/UI/Button";
// import { useRouter } from "next/navigation";

export default function LoginPage() {
  //  const router = useRouter()
  // const handle = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   router.push('/dashboard')
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-slate-800">
            Bem-vindo ao StockUp
          </h1>
          <p className="text-sm text-slate-500">
            Faça login para gerenciar seu estoque
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-600">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-600">
              Senha
            </label>
            <input
              type="password"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <Button className="w-full">
            Entrar
          </Button>
        </form>

        <div className="text-center text-sm text-slate-500">
          Não tem uma conta?{" "}
          <Link href="/auth/register" className="text-blue-600 hover:underline">
            Criar conta
          </Link>
        </div>

      </div>
    </div>
  );
}
  
