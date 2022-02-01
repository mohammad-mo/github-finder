import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Alert from './Components/Layout/Alert'
import { GithubProvider } from './Context/Github/GithubContext'
import { AlertProvider } from './Context/Alert/AlertContext'

const App = () => 
{
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
         <div className="flex flex-col justify-between h-screen">
           <Navbar />
           <main className='container mx-auto px-3 pb-12'>
             <Alert />
             <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/about' element={<About />} />
               <Route path='/notfound' element={<NotFound />} />
               <Route path='/*' element={<NotFound />} />
             </Routes>
           </main>
           <Footer />
         </div> 
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
