
import './App.css'
import Navbar from './compunent/Navbar'

function App() {
  

  return (
    <>

 <h1>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>
 <h1>আসসালামু আলাইকুম </h1>
 <h2>welcome to our study-flow </h2>
 {/* nav */}
<Navbar></Navbar>


 <div className='border-1 m-5 p-5'>
  <h1>Study folow feature</h1>
  <ul className='text-fuchsia-500'>
    <li>nav</li>
    <li>mark</li>
    <li>help</li>
    <li>road map</li>
    <li>Focus</li>
  </ul>

 </div>

    </>
  )
}

export default App
