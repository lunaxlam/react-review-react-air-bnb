import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card'
import swimmer from './images/swimmer.png'
import wedding from './images/wedding.png'
import mountain from './images/mtnbike.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="flex">
        <Card
          img={swimmer}
          img_alt="Katie Zafares"
          rating="5.0"
          rating_count={6}
          country="USA"
          description="Life lessons with Katie Zafares"
          pricing={136}
        />
        <Card
          img={wedding}
          img_alt="Wedding Bride"
          rating="5.0"
          rating_count={30}
          country="USA"
          description="Learn wedding photography"
          pricing={125}
        />
        <Card 
          img={mountain}
          img_alt="Mountain Bike"
          rating="4.8"
          rating_count={2}
          country="USA"
          description="Group Mountain Biking"
          pricing={50}
        />
      </div>
    </div>
  );
}

export default App;
