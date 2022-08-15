import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card'
// import swimmer from './images/swimmer.png'
// import wedding from './images/wedding.png'
// import mountain from './images/mtnbike.png'
import cardData from './data'

function App() {

  const cards = cardData.map((card) => {
    return <Card 
              key={card.id}
              card={card}
            />
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="flex">
        {cards}
      </div>
    </div>
  );
}

      //   <Card
      //     img={swimmer}
      //     img_alt="Katie Zafares"
      //     rating="5.0"
      //     rating_count={6}
      //     country="USA"
      //     description="Life lessons with Katie Zafares"
      //     pricing={136}
      //   />
      //   <Card
      //     img={wedding}
      //     img_alt="Wedding Bride"
      //     rating="5.0"
      //     rating_count={30}
      //     country="USA"
      //     description="Learn wedding photography"
      //     pricing={125}
      //   />
      //   <Card 
      //     img={mountain}
      //     img_alt="Mountain Bike"
      //     rating="4.8"
      //     rating_count={2}
      //     country="USA"
      //     description="Group Mountain Biking"
      //     pricing={50}
      //   />
      // </div>


    //   return <Card 
    //   key={card.id}
    //   img={card.coverImg}
    //   img_alt={card.title}
    //   rating={card.stats["rating"]}
    //   rating_count={card.stats["reviewCount"]}
    //   location={card.location}
    //   description={card.title}
    //   pricing={card.price}
    //   openSpots={card.openSpots}
    // />

export default App;
