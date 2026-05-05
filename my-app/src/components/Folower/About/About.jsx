import image from '../../../images/images.jpg'
const About=()=> {
  return (
    <section className="about">
      <img src={image} alt="about" />

      <div className="about-text">
        <h2>About Our Shop</h2>
        <p>
          We provide fresh and beautiful flowers for every occasion.
          Our shop offers bouquets, gifts and decorations for weddings,
          birthdays and special events.
        </p>
      </div>
    </section>
  );
}

export default About;