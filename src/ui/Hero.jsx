import Button from '../components/Button';

// 1. Destructure props inside curly braces
const Hero = ({ mainText, subText, buttonText }) => { 

    return (
        // 2. Change 'class' to 'className'
        <section className="hero" id="home">
            <div className="hero-content">
                <h1>{mainText}</h1>
                <p>{subText}</p>
                <Button text={buttonText} />
            </div>
        </section>
    );
}

export default Hero;