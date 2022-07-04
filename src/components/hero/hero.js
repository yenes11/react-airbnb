import photo from './photo-grid.png';
import './hero.css'


function Hero() {
    return (
        <section className='hero'>
            <img src={photo} alt='photo' className='photo'/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;