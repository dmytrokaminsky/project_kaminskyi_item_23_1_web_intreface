import React from 'react';
import ShopCard from '../components/shopcard/ShopCard'
import logo from '../logo.svg';
import picture1 from '../image.png';

function Home(){
    const itemsList = [
        {id: 1, name: "Energy", image: picture1,  description: "Human civilization requires energy to function, which it gets from energy resources such as fossil fuels, nuclear fuel, or renewable energy."},
        {id: 2, name: "React", image: logo, description: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript"},
      ];
 return (
 
 <main>
    <div> Home </div>
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
 );
};

export default Home;