import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Card from './components/card/card';
import  bike  from './images/bike.png';
import  wedding  from './images/wedding.png';
import  swimmer  from './images/swimmer.png';


var cards = [
  {
    status: 'SOLD OUT',
    image: swimmer,
    rating: 5.0,
    votes: 6,
    location: 'USA',
    title: 'Life lessons with Katie Zafares',
    price: '136$',
    quantity: 'person'
  },
  {
    status: 'ONLINE',
    image: wedding,
    rating: 5.0,
    votes: 30,
    location: 'USA',
    title: 'Learn wedding photography',
    price: '125$',
    quantity: 'person'
  },
  {
    status: 'SOLD OUT',
    image: bike,
    rating: 4.8,
    votes: 2,
    location: 'USA',
    title: 'Group mountain biking',
    price: '50$',
    quantity: 'person'
  }
]


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='cards'>
        { cards.map((card) => (
          <Card
            status={card.status}
            image={card.image}
            rating={card.rating}
            votes={card.votes}
            location={card.location}
            title={card.title}
            price={card.price}
            quantity={card.quantity}
          />
        )) }
      </div>
    </div>
  );
}

export default App;
