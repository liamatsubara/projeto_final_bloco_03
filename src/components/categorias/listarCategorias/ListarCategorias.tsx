import { useEffect, useState } from "react";
import { ColorRing, DNA } from "react-loader-spinner";
import { listar } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import CardCategorias from "../cardCategorias/CardCategorias";

function ListarCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function buscarCategorias() {
        setIsLoading(true)

        try {
            await listar('/categorias', setCategorias)
        } catch (error) {
            console.log('Erro ao listar as categorias!')
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);
    
    return (
        <>
        {categorias.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
            />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarCategorias;