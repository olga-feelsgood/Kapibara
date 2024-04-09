import './MainPage.css'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Welcome from '../Welcome/Welcome'
import Footer from '../Footer/Footer'

function MainPage() {


  return (
    <>
      <Header />
      <main className='main'>
        <Banner />
        <Welcome />
      </main>
      <Footer />
    </>
  )
}

export default MainPage