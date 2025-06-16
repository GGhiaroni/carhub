"use client";

const CardCarro = ({ carro }) => {
  const { city_mpg, year, make, model, transmission, drive } = carro;
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p>
        <span>custo</span>
      </p>
    </div>
  );
};

export default CardCarro;
