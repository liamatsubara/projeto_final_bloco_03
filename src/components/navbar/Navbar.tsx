import { FirstAid, ShoppingCart, User } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
  return (

    <div className="w-full flex justify-center py-4 bg-slate-900 text-white">
        <div className="container flex justify-between">
            <Link to='/' className="flex gap-2 text-xl items-center">
                <FirstAid size={32} weight="light" />
                FARMÁCIA
            </Link>

            <div className="flex items-center gap-4">
                <Link to='/categorias' className="hover:underline">Categorias</Link>
                <span>Cadastrar Categoria</span>
                <User size={32} weight="thin" />
                <ShoppingCart size={32} weight="thin" />
            </div>
        </div>
    </div>
  )
}

export default Navbar