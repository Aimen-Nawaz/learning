const Dashboardcard = ({ cards }) => {
  return (
    <div className="cards">
      {cards.map((card) => (
        <div key={card.title} className={card.className}>
          <h4>
            <i className={`fa-solid ${card.icon}`}></i> {card.title}
          </h4>

          <p>{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboardcard;