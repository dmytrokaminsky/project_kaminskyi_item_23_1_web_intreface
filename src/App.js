import logo from './logo.svg';
import picture1 from './image.png';
import './App.css';
import Menu from './components/menu/Menu';
import ShopCard from './components/shopcard/ShopCard'

function App() {


  const itemsList = [
    {id: 1, name: "Energy", image: picture1,  description: "Human civilization requires energy to function, which it gets from energy resources such as fossil fuels, nuclear fuel, or renewable energy."},
    {id: 2, name: "React", image: logo, description: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript"},
  ];
  
    return (
  <section className="app">
  <header className="app-header">
  <Menu/>
  </header>
  <main>
  <section className="mt-3 container">
  <div className="row">
    {itemsList.map(item => {
    return (
      <ShopCard key={item.id} card={item} />
    );  
    })}
  
  </div>
  </section>
  </main>
  </section>
  );
 }
 export default App;
