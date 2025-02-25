
function Home() {
    return (

      <div className="flex justify-center bg-slate-500"> 

          <div className="container grid grid-cols-2 text-white">

            <div className="flex flex-col items-center justify-center gap-4 py-4">
                <h2 className="text-5xl font-bold">Seja Bem-Vinde!</h2>
                <p className="text-xl">Aqui você encontra medicamentos e cosmésticos!</p>
    
                <div className="border-2 py-2 px-4 rounded">
                    Cadastrar Produto
                </div>
            </div>

            <div className="flex justify-center">
                <img 
                    src="https://ik.imagekit.io/liaMatsubara/farmacia.svg?updatedAt=1740485561978"
                    alt="Imagem de uma mulher em uma farmácia" 
                    className="w-2/3"
                />
            </div>

          </div>

      </div>
    )
  }
  
  export default Home