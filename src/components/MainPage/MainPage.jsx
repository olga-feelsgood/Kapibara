import './MainPage.css'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'

function MainPage() {


  return (
    <>
      <Header />
      <main className='main'>
        <Banner />
      </main>
      <Footer />
    </>
  )
}

export default MainPage