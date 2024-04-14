import logo from './logo.svg';
import picture1 from './image.png';
import './App.css';
import Menu from './components/menu/Menu';
import ShopCard from './components/shopcard/ShopCard'

function App() {
  return (
  <section className="app">
  <header className="app-header">
  <Menu/>
  </header>
  <main>
  <section className="container">
  <div className="row">
  <div className="col-12 col-lg-20 d-flex">
  <ShopCard card={{id: 1, image: picture1, title: "Energy", description: "Human civilization requires energy to function, which it gets from energy resources such as fossil fuels, nuclear fuel, or renewable energy."}}
  otherval={"other"}/>
  <ShopCard card={{id: 1, image: logo, title: "React", description: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript"}}
  otherval={"other"}/>
  </div>
  
  </div>
  </section>
  </main>
  </section>
  );
 }
 export default App;
