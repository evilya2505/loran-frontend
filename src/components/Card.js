function Card({ direction }) {
  return (
    <li className="card cards__card">
      <h3 className="card__title">{direction.name}</h3>
      <img
        src={direction.imagePath}
        alt="изображение направления"
        className="card__img"
      />
    </li>
  );
}

export default Card;
