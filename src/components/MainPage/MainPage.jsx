import './MainPage.css'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Welcome from '../Welcome/Welcome'
import Laboratory from '../Laboratory/Laboratory'
import Galery from '../Galery/Galery'
import Footer from '../Footer/Footer'


function MainPage() {


  return (
    <>
      <Header />
      <main className='main'>
        <Banner />
        <Welcome />
        <Laboratory />
        <Galery />
      </main>
      <Footer />
    </>
  )
}

export default MainPage