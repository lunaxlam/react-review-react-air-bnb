import heroImg from '../images/hero-img.png'

function Hero() {
    return (
        <div className="container">
            <img 
                src={heroImg} 
                alt="hero_image"
                className="hero--img"
            />
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--details">
                Join unique interactive activities led by one-of-a-kind hosts
                without leaving home.
            </p>
        </div>
    )
}

export default Hero;