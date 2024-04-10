import './App.css'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Welcome from '../Welcome/Welcome'
import Laboratory from '../Laboratory/Laboratory'
import Galery from '../Galery/Galery'
import Form from '../Form/Form'
import Footer from '../Footer/Footer'

function App() {


  return (
    <>
      <Header />
      <main className='main'>
        <Banner />
        <Welcome />
        <Laboratory />
        <Galery />
        <Form />
      </main>
      <Footer />
    </>
  )
}

export default App
