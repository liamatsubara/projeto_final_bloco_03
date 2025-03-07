import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/footer/Footer'
import ListarCategorias from './components/categorias/listarCategorias/ListarCategorias'
import DeletarCategoria from './components/categorias/deletarCategorias/DeletarCategoria'
import FormCategoria from './components/categorias/formcategoria/FormCategoria'


function App() {
    return (
        <>
        <BrowserRouter>
            <Navbar />
            <div className='min-h-[80vh]'>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/categorias' element={<ListarCategorias/>}/>
                    <Route path="/cadastrarcategoria" element={<FormCategoria />} />
                    <Route path="/editarcategoria/:id" element={<FormCategoria />} />
                    <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
        </>
    )
}

export default App
