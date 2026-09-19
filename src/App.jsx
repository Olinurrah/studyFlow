
import './App.css'
import Footer from './compunent/Footer'
import Footer2 from './compunent/Footer2'
import HeroSection from './compunent/HeroSection'
import Navbar from './compunent/Navbar'

function App() {
  

  return (
    <>

 <h1>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>
 <h1>আসসালামু আলাইকুম </h1>
 <h2>welcome to our study-flow </h2>
 {/* nav */}
<Navbar></Navbar>
<HeroSection></HeroSection>


 <div className='border m-5 p-5'>
  <h1>Study folow feature</h1>
  <ul className='text-fuchsia-500'>
    <li>nav</li>
    <li>mark</li>
    <li>help</li>
    <li>road map</li>
    <li>Focus</li>
  </ul>

 </div>
{/* footer */}
<Footer></Footer>
<Footer2></Footer2>



    </>
  )
}

export default App
