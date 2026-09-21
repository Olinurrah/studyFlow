
import './App.css'
import Card from './compunent/Card'
// import AdminPanel from './compunent/AdminPanel'
import Footer from './compunent/Footer'
import Footer2 from './compunent/Footer2'
import HeroSection from './compunent/HeroSection'
// import Login from './compunent/Login'
import Navbar from './compunent/Navbar'
import ConditionalRendaring from './react-concepts/ConditionalRendaring'

function App() {
  

  return (
    <>

 <h1>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>
 <h1>আসসালামু আলাইকুম </h1>
 <h2>welcome to our study-flow </h2>
 {/* nav */}
<Navbar></Navbar>
<HeroSection></HeroSection>
<Card />
{/* <Login /> */}
{/* <AdminPanel /> */}
{/* footer */}
<ConditionalRendaring />
<Footer></Footer>
<Footer2></Footer2>




    </>
  )
}

export default App
