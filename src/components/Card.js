function Card(props) {
  return (
    <li className="card cards__card">
      <h3 className="card__title">{props.title}</h3>
      <img src={props.imagePath} alt="изображение направления" className="card__img"/>
    </li>
  )
}

export default Card;